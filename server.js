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
var userDetail = {};
var friendList = {};
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
      console.log("DB Data:", response);
      users[searchData.id].emit('search-user-list', searchUserConfig.searchUser(response,searchData, users));
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
      response ? users[reqData.id].emit('friend-request-status', successResponse) :
        users[reqData.id].emit('friend-request-status', failiureResponse);
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

  function isFriendOnline(friendId) {

    return (friendId in users) ? true : false;
  }

// To verify later
  function friendListFileCreation(id) {

    var fileToCreate = id + "-friend-list.json";

    var textToWrite = {"firendList": []};

    var writeInFile = JSON.stringify(textToWrite, null, 2);

    fs.writeFileSync('server/friend-list/' + fileToCreate, writeInFile);

    return fileToCreate;

  }

  function messageBookCreation(id) {

    var fileToCreate = id + "-message-book.json";

    var textToWrite = {"messageBook": []};

    var writeInFile = JSON.stringify(textToWrite, null, 2);

    fs.writeFile('server/user-message-book/' + fileToCreate, writeInFile, finished);

    function finished() {
      console.log("Friend list file created");
    }

    return fileToCreate;

  }

  app.post('/send-friend-request', sendFriendRequest);

  function sendFriendRequest(req, res, next) {

    var msg = {};

    var addFriend = "";

    var selfUser = friendListCreation(req.body.userId, req.body.friendId, "sent");


    if (selfUser == true) {

      addFriend = friendListCreation(req.body.friendId, req.body.userId, "received");

      if (addFriend == true) {

        msg = {
          "info": "Friend Request Sent",
          "status": "pending"
        }

      } else {

        msg = {
          "info": "Friend Request Can't sent",
          "status": "cancel"
        }

      }

    } else {

      msg = {
        "info": "Due to some technical issues, Your request can't be complete this time.",
        "status": "cancel"
      }

    }

    res.send(msg);

  }

  function friendListCreation(fromId, toId, reqType) {

    var msg;

    var fileName = "server/friend-list/" + fromId + "-friend-list.json";

    var readFile = fs.readFileSync(fileName);

    var readJson = JSON.parse(readFile);

    var friendList = readJson.firendList;

    friendList.push({"friendId": toId, "status": "pending", "reqType": reqType});

    var getData = {};

    getData.firendList = friendList;

    var dataToWrite = JSON.stringify(getData, null, 2);

    var fileWrite = fs.writeFileSync(fileName, dataToWrite);

    msg = true;

    console.log("MSG", fileWrite);

    return msg;

  }

  /*app.post('/friend-request', newFriendRequest);

  function newFriendRequest(req, res, next) {

    var id = req.body.userId;

    var fileName = "server/friend-list/" + id + "-friend-list.json";

    console.log("file Name:", fileName);

    var readFile = fs.readFileSync(fileName);

    var readJson = JSON.parse(readFile);

    var friendList = readJson.firendList;

    var listArray = [];


    for (var i = 0; i < friendList.length; i++) {

      if (friendList[i].status == "pending" && friendList[i].reqType == "received") {

        var getUserProfile = {};



        getUserProfile.detail = profileInfo(friendList[i].friendId);
        getUserProfile.detail.friendId = friendList[i].friendId;
        getUserProfile.detail.isFriend = friendList[i].status;
        getUserProfile.detail.isOnline = isFriendOnline(friendList[i].friendId);

        listArray.push(getUserProfile);

      }

    }

    var dataToSend = {"requestList" : listArray}

    res.send(dataToSend);

  }*/

  function profileInfo(id) {

    var fileName = "server/user-profile-detail/" + id + "-profile.json";

    var readFile = fs.readFileSync(fileName);

    var readJson = JSON.parse(readFile);

    return readJson;

  }

  app.post('/confirm-friend-request', confirmFriendRequest);

  function confirmFriendRequest(req, res, next) {

    var msg = {};

    var confirm;

    if (req.body.action == "accept") {

      confirm = true;

    }

    if (req.body.action == "delete") {

      confirm = false;

    }

    var selfUserConfirmation = confirmRequest(req.body.userId, req.body.friendId, confirm);

    var toUserConfirmation;

    if (selfUserConfirmation == true) {

      toUserConfirmation = confirmRequest(req.body.friendId, req.body.userId, confirm);

      if (toUserConfirmation == true) {

        msg = {

          "info": "You accepted the request successfully",
          "status": "true"
        };

      } else {

        msg = {

          "info": "You declined the request successfully",
          "status": "false"
        };

      }

    } else {

      msg = {
        "info": "Due to some technical issues, Your request can't be complete this time.",
        "status": "cancel"
      }

    }

    res.send(msg);

  }

  function confirmRequest(fromId, toId, confirm) {

    var fileName = "server/friend-list/" + fromId + "-friend-list.json";

    var readFile = fs.readFileSync(fileName);

    var readJson = JSON.parse(readFile);

    var friendList = readJson.firendList;

    var buildArray = [];

    for (var i = 0; i < friendList.length; i++) {

      if (toId == friendList[i].friendId && confirm) {

        friendList[i].status = confirm;

      } else {

        if (toId == friendList[i].friendId && !confirm) {

          delete friendList[friendList[i]];

        }
      }

      buildArray.push(friendList[i]);

    }

    var getData = {};

    getData.firendList = friendList;

    var dataToWrite = JSON.stringify(getData, null, 2);

    var fileWrite = fs.writeFileSync(fileName, dataToWrite);

    console.log("Request accepted ? : ", confirm);

    return true;

  }

  /*
  app.post("/friend-list", accessFriendList);

  function accessFriendList(req, res, next) {

    var fileName = "server/friend-list/" + req.body.userId + "-friend-list.json";

    var readFile = fs.readFileSync(fileName);

    var readJson = JSON.parse(readFile);

    var friendList = readJson.firendList;

    var buildList = [];

    var data = {};

    for(var i=0; i<friendList.length; i++){

      if(friendList[i].status == true) {

        var friendObj = {};

        var friendId = friendList[i].friendId;

        var status = friendList[i].status;

        friendList[i] = profileInfo(friendId);

        friendList[i].isOnline = isFriendOnline(friendId);

        friendList[i].isFriend = status;

        friendList[i].friendId = friendId;

        delete friendList[i]['friendListFile'];
        delete friendList[i]['messageBook'];
        delete friendList[i]['status'];
        delete friendList[i]['birthday'];
        delete friendList[i]['email'];
        delete friendList[i]['fName'];
        delete friendList[i]['lName'];

        buildList.push(friendList[i]);
      }

    }

    data.friendList = buildList;

    res.send(data);
  }
  */
