//console.log("server is starting");
var fs = require('fs');
var express = require('express');
var mongoClient = require('mongodb');
var mongoUrl = 'mongodb://localhost:27017/';
var dbName = 'chatdb';
var dbCollectionName = {
  'userProfile' : 'userProfile',
  'friendList' : 'friendList'
};

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
    var filterData = {$and: [{receiverId: request}, {status: 'Approved'}]};
    console.log('filterData:='+ JSON.stringify(filterData));
    findQueryInDB(dbCollectionName.friendList, filterData, function (friendRequestListResp) {
      console.log("get-notification-list:= ", friendRequestListResp);
      var senderIds = [];
      for(var i =0 ;i<friendRequestListResp.length;i++) {
        if(friendRequestListResp[i]){
          senderIds.push(friendRequestListResp[i].senderId)
        }
      }
      var query = { id: { $in: senderIds } };
      findQueryInDB(dbCollectionName.userProfile, query, function (usersProfileResp) {
        for(var k = 0; k < usersProfileResp.length; k++) {
          usersProfileResp[k]["isFriend"] = true;
          usersProfileResp[k]["friendStatus"] = 'Approved';
        }
        console.log('final usersProfileResp:= ', usersProfileResp);
        users[request].emit('get-friend-list', usersProfileResp);
      })
    });
  });

  socket.on("search-user", function (searchData) {
    var filterData = {$or: [{fName: searchData.searchString}, {lName: searchData.searchString}]};
    console.log("Search Data:", JSON.stringify(filterData));
    findQueryInDB(dbCollectionName.userProfile, filterData, function (userProfileResp) {
      var query = {$or: [{senderId: searchData.id}, {receiverId: searchData.id}]};
      findQueryInDB(dbCollectionName.friendList, query, function (friendListResp) {
        //var record = isFriendExist.friendExist(data, searchData.id);
        console.log("Friend List Table:", friendListResp);
        console.log("Search user Record:", userProfileResp);
        for(var i = 0; i < userProfileResp.length; i++) {
          for(var k = 0; k < friendListResp.length; k++) {
            if (friendListResp[k].senderId === userProfileResp[i].id ||
              friendListResp[k].receiverId === userProfileResp[i].id) {
              console.log('entered in if conditions');
              userProfileResp[i]["isFriend"] = true;
              userProfileResp[i]["friendStatus"] = friendListResp[k].status;
              break;
            } else {
              userProfileResp[i]["isFriend"] = false;
            }
          }
        }
        console.log('final userProfileResp:=', userProfileResp)
        users[searchData.id].emit('search-user-list', userProfileResp);
      });
    });
  });

  socket.on("get-notification-list", function (request) {
    var filterData = {$and: [{receiverId: request}, {status: 'Pending'}]};
    console.log('filterData:='+ JSON.stringify(filterData));
    findQueryInDB(dbCollectionName.friendList, filterData, function (friendRequestListResp) {
      console.log("get-notification-list:= ", friendRequestListResp);
      var senderIds = [];
      for(var i =0 ;i<friendRequestListResp.length;i++) {
       if(friendRequestListResp[i]){
         senderIds.push(friendRequestListResp[i].senderId)
       }
      }
      var query = { id: { $in: senderIds } };
      findQueryInDB(dbCollectionName.userProfile, query, function (usersProfileResp) {
          for(var k = 0; k < usersProfileResp.length; k++) {
              usersProfileResp[k]["isFriend"] = true;
              usersProfileResp[k]["friendStatus"] = 'Pending';
          }
        console.log('final usersProfileResp:= ', usersProfileResp);
        users[request].emit('get-notifications', usersProfileResp);
      })
    });
  });


  socket.on("confirm-friend-request", function (request) {

    var query = {$and: [{receiverId: request.senderId}, {senderId: request.receiverId}]};
    var data = { $set: {status: request.action}};

    console.log('query:=', JSON.stringify(query));
    console.log('data:=', JSON.stringify(data));
    updateInDB(dbCollectionName.friendList, query, data, function (friendRequestResp) {
      console.log('confirm-friend-request:=',request.receiverId );
      console.log('users:=',users);
      users[request.senderId].emit('confirm-request', true);
    })
  });


  socket.on("deny-friend-request", function (request) {

    var query = {$and: [{receiverId: request.senderId}, {senderId: request.receiverId}]};

    console.log('query:=', JSON.stringify(query));

    deleteFromDB(dbCollectionName.friendList, query, function (friendRequestResp) {

      var resp = {'isSuccess' : true};
      console.log('friendRequestResp=',  friendRequestResp)
      users[request.senderId].emit('deny-request', true);
    })
  });

  socket.on("sent-request", function (reqData) {
    insertInDB(dbCollectionName.friendList, reqData, function (response) {
      var successResponse = {
        "status": true,
        "code": 200
      };
      var failiureResponse = {"status": false, "code": 500};
      response ? users[reqData.senderId].emit('friend-request-status', successResponse) :
        users[reqData.senderId].emit('friend-request-status', failiureResponse);
      console.log('Friend request status:', successResponse);
    });
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

