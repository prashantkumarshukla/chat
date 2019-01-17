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
var searchUserConfig = require('./server/search-user.js');
var loginVerify = require('./server/login-validation.js');

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
    var filterData = {email: 1};
    var data = {};
    var getUserId = "";
    findQueryInDB(dbCollectionName.userProfile, filterData, function (result) {
      var loginData = loginVerify.loginVerify(result, socket, userdata);
      if (loginData) {
        socket.userId = loginData.userId;
        users[socket.userId] = socket;
        users[socket.userId].emit("login done", loginData);
        console.log("===========User logged in successfully=============");
        console.log(loginData);
        console.log("===================================================");
      } else {
        console.log("===========Login Failed=============");
        data = {"status": false};
        users[getUserId].emit('login done', data);
        console.log("===================================================");
      }
    });
  });

  socket.on("search-user", function (searchData) {
    var filterData = {_id: 0};
    console.log("Search Data:", searchData);
    findQueryInDB(dbCollectionName.userProfile, filterData, function (response) {
      var filteredSearch = searchUserConfig.searchUser(response,searchData, users);
      var query = {$or: [{senderId: searchData.id}, {receiverId: searchData.id}]};
      findQueryInDB(dbCollectionName.friendList, query, function (data) {
        //var record = isFriendExist.friendExist(data, searchData.id);
        console.log("Friend List Table:", data);
        console.log("Search user Record:", filteredSearch);
        for(var i = 0; i < filteredSearch.length; i++) {
          for(var k = 0; k < data.length; k++) {
            if (data[k].senderId === filteredSearch[i].friendId ||
              data[k].receiverId === filteredSearch[i].friendId) {
              filteredSearch[i]["isFriend"] = true;
              filteredSearch[i]["friendStatus"] = data[k].status;
            } else {
              filteredSearch[i]["isFriend"] = false;
            }
          }
        }
        console.log("Updated Search Result:", filteredSearch);
        users[searchData.id].emit('search-user-list', filteredSearch);
      });
    });
  });

  socket.on("get-notification-list", function (request) {
    var filterData = {receiverId: request};
    findQueryInDB(dbCollectionName.friendList, filterData, function (response) {
      console.log("get-notification-list:= ", response);
      for(var i =0 ;i<response.length;i++)
      {
       if(response[i]){
         var query = {id :response[i].senderId};
         findQueryInDB(dbCollectionName.userProfile, query, function (usersData) {
           console.log('get-user-list:=' + usersData);
           users[request].emit('get-notifications', usersData);
         })
       }
      }
    });
  });

  socket.on("sent-request", function (reqData) {
    insertInDB(dbCollectionName.friendList, reqData, function (response) {
      var successResponse = {
        "responseType" : "friendRequest",
        "friendId": reqData.friendId,
        "status": true,
        "code": 200,
        "isFriend": "pending",
        "request": "sent"
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
          .find({}, data).toArray(function (err, result) {
          if (err) {
            console.log('Query not executed: ' + err);
            callback(false);
          } else {
            console.log('Query executed: ' + result.length);
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

