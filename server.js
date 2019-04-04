//console.log("server is starting");
var fs = require('fs');
var express = require('express');
var mongoClient = require('mongodb');
var mongoUrl = 'mongodb://localhost:27017/';
var dbName = 'chatdb';
var dbCollectionName = {
  'userProfile' : 'userProfile',
  'friendList' : 'friendList',
  'conversations' : 'conversations'
};

var dbScripts = require('./server/database-scripts');

var path = require('path');
var http = require('http');

//var port = process.env.Port || 5000;
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var users = {};

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function(req, res) {

  res.sendFile(path.join(__dirname, 'dist/index.html'));

});

/*server.listen(port,function() {
  console.log('server running...');
});*/

app.set('port', (process.env.PORT || 5000));

server.listen(app.get('port'), function() {
  console.log('App is running, server is listening on port ', app.get('port'));
});

io.sockets.on('connection', function(socket) {
  socket.on("login", function (userdata) {
    var userStatus = false;
    var filterData = {email: userdata.userName};
    var data = {};
    var getUserId = "";
    findQueryInDB(dbCollectionName.userProfile,  filterData, function (result) {
      if (result[0].userPwd === userdata.userPassword) {
        socket.userId = result[0].id;
        users[socket.userId] = socket;
        result[0].success = true;
        users[socket.userId].emit("login done", result[0]);
        console.log("===========User logged in successfully=============");
        console.log("===================================================");
      } else {
        console.log("===========Login Failed=============");
        data = {"status": false};
        users[getUserId].emit('login done', data);
        console.log("===================================================");
      }
    });
  });

  socket.on("friend-list", function (request) {
    dbScripts.friendList(request).then(function (response) {
      var Ids = [];
      response.forEach(function(data) {
        if (data.senderId !== request) {
          Ids.push(data.senderId);
        }
        if (data.receiverId !== request) {
          Ids.push(data.receiverId);
        }
      });
      dbScripts.userProfiles(Ids).then(function (usersProfileResp) {
        var buildResponse = [];
        usersProfileResp.forEach(function (detail) {
          detail.isFriend = true;
          detail.friendStatus = 'Approved';
          detail.isOnline = users[detail.id] ? true : false;
          buildResponse.push(detail);
        });
        users[request].emit('get-friend-list', buildResponse);
      });
    });
  });

  socket.on("search-user", function (searchData) {
    dbScripts.searchUserProfile(searchData).then(function (searchResponse) {
      var buildResponse = [];
      searchResponse.forEach(function (data) {
        dbScripts.validateFriendList(data.id, searchData.id).then(function (friendResponse) {
          if (friendResponse.length === 0) {
            dbScripts.validateFriendList(searchData.id, data.id).then(function (newFriendResponse) {
              if (newFriendResponse.length > 0) {
                newFriendResponse.forEach( function (value) {
                  value.friendStatus = value.status;
                  value.isFriend = true;
                  buildResponse.push(value);
                });
              }
            });
          } else {
            friendResponse.isFriend = true;
            friendResponse.friendStatus = friendResponse.status;
            buildResponse.push(friendResponse);
          }
        });
        buildResponse.push(data);
      });
      users[searchData.id].emit('search-user-list', buildResponse);
    }).catch(function (reason) {
      console.log("Error in execution: ", reason)
    });
  });

  socket.on("get-notification-list", function (request) {
    dbScripts.friendRequest(request).then(function (response) {
      var senderIds = [];
      var buildResponse = [];
      console.log("Response: ", response);
      if (response.length > 0) {
        response.forEach(function (list) {
          senderIds.push(list.senderId);
        });
        dbScripts.userProfiles(senderIds).then(function (profileDetails) {
          profileDetails.forEach(function (userData) {
            userData.isFriend = true;
            userData.friendStatus = 'Pending';
            userData.isOnline = users[userData.id] ? true : false;
            buildResponse.push(userData);
          });
          users[request].emit('get-notifications', buildResponse);
          //users[request].emit('new-request', buildResponse.length);
        });
      }
    });
  });


  socket.on("confirm-friend-request", function (request) {
    dbScripts.confirmFriendRequest(request).then(function (value) {
      console.log("Request confirm: ", value);
      users[request.senderId].emit('confirm-request', true); // Confirmed back to the user who confirm the request
      if (users[request.receiverId]) {
        var ids = [];
        ids.push(request.senderId);
        dbScripts.userProfiles(ids).then(function (userProfile) {
          console.log('Request sent back to the sender: ', userProfile);
          users[request.receiverId].emit('friend-request-confirmed', userProfile);
        });
      }
    });
  });


  socket.on("deny-friend-request", function (request) {
    dbScripts.denyFriendRequest(request).then(function (response) {
      users[request.senderId].emit('deny-request', true);
    });
  });

  socket.on("sent-request", function (reqData) {
    dbScripts.newFriendRequest(reqData).then(function (response) {
      var successResponse = {
        "status": true,
        "code": 200
      };
      var failiureResponse = {
        "status": false,
        "code": 500
      };
      response ? users[reqData.senderId].emit('friend-request-status', successResponse) :
        users[reqData.senderId].emit('friend-request-status', failiureResponse);
      if (users[reqData.receiverId]) {
        users[reqData.receiverId].emit('new-request', '1');
      }
    });
  });

  socket.on('send-message', function (request) {
    var Ids = [];
    var isOnline = users[request.receiverId] ? true : false;
    Ids.push(request.senderId);
    dbScripts.userProfiles(Ids).then(function (response) {
      console.log("User Profile: ", response);
      var detail = {};
      detail.fName = response[0].fName;
      detail.lName = response[0].lName;
      detail.gender = response[0].gender;
      detail.id = response[0].id;
      dbScripts.saveConversations(request).then(function (conversationDetails) {
        if (isOnline) {
          dbScripts.friendListWithAllStatus(request.senderId).then(function (userDetails) {
            if(userDetails.length > 0) {
              detail.isFriend = userDetails[0].status === 'Approved' ? true : false;
              detail.friendStatus = userDetails[0].status;
              detail.isOnline = isOnline;
              detail.message = request.message;
              console.log("M1: ", detail);
              users[request.receiverId].emit('receive-message', detail);
            }
          });
        }
        console.log("To Sender: ", conversationDetails);
        users[request.senderId].emit('message-sent', conversationDetails);
      });
    });
  });

  socket.on('typing', function (request) {
    if (users[request.friendId]) {
      users[request.friendId].emit('user-is-typing', true);
    }
  });
});

  var bodyParser = require('body-parser');

  function listening() {
    console.log("Server is running...");
  }


  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.post('/register', registerUser);

  function findQueryInDB(collectionName, data, callback) {
    mongoClient.connect(mongoUrl, function (err, db) {
      if (err) {
        console.log('Database not connected: ' + err);
        callback(false);
      } else {
        var dbo = db.db(dbName);
        dbo.collection(collectionName)
          .find(data).toArray(function (err, result) {
          if (err) {
            console.log('Query not executed: ' + err);
            callback(false);
          } else {
            callback(result);
            db.close();
          }
        });
      }
    });
  }

  function insertInDB(collectionName, data, callback) {
    mongoClient.connect(mongoUrl, function (err, db) {
      if (err) {
        console.log('Database not connected: ' + err);
        callback(false);
      } else {
        var dbo = db.db(dbName);
        dbo.collection(collectionName)
          .insertOne(data, function (err, res) {
            if (err) {
              console.log('Data insertion failed: ' + err);
              callback(false);
            } else {
              console.log(res.insertedCount + ': Data inserted successfully ');
              callback(true);
              db.close();
            }
          });
      }
    });
  }


function deleteFromDB(collectionName, query, callback) {
  mongoClient.connect(mongoUrl, function (err, db) {
    if (err) {
      console.log('Database not connected: ' + err);
      callback(false);
    } else {
      var dbo = db.db(dbName);
      dbo.collection(collectionName)
        .deleteOne(query, function (err, res) {
          if (err) {
            console.log('Data Deletion failed: ' + err);
            callback(false);
          } else {
            console.log(res.insertedCount + ': Data Deletion successfully ');
            callback(true);
            db.close();
          }
        });
    }
  });
}

  function updateInDB(collectionName, filter, data, callback) {
    mongoClient.connect(mongoUrl, function (err, db) {
    if (err) {
      console.log('Database not connected: ' + err);
      callback(false);
    } else {
      var dbo = db.db(dbName);
      dbo.collection(collectionName)
        .updateOne(filter, data, function (err, res) {
          if (err) {
            console.log('Data updation failed: ' + err);
            callback(false);
          } else {
            console.log(res.insertedCount + ': Data updated successfully ');
            callback(true);
            db.close();
          }
        });
    }
  });
    }

  function registerUser(req, res, next) {

    var msg = {};

    var filterData = {email: 1};

    var data = req.body;

    findQueryInDB(dbCollectionName.userProfile, filterData, function (result) {

      var userExist = false;

      for (var i = 0; i < result.length; i++) {

        console.log('Email id is : ' + result[i].email);

        if (result[i].email === data.email) {

          userExist = true;

          msg = {

            'status': false,
            'responseCode': 200,
            'info': 'User Already Exist'
          };

          console.log(msg.info);

          break;
        }
      }

      if (!userExist) {

        insertInDB(dbCollectionName.userProfile, data, function (response) {

          if (response) {

            msg = {

              'status': true,
              'responseCode': 200,
              'info': 'User successfully registered'
            };
          } else {

            msg = {

              'status': false,
              'responseCode': 503,
              'info': 'DB insertion failed'
            };
          }

          console.log(msg.info);
          res.send(msg);
        });
      }
    });
  }

