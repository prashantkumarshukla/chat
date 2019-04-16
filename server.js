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
var dbConnect = require('./server/database-connection-util');
var dbScripts = require('./server/database-scripts');
var chatRooms = require('./server/chatrooms');
var utility = require('./server/utility');
var friendListUtility = require("./server/friend-list");
var searchUserUtility = require('./server/search-user');
var userProfileUtility = require("./server/user-profile");
var chatConversationUtility = require('./server/database-conversation');
var loadMessages = require('./server/load-messages');

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

chatRooms.createRoom().then(function (rooms) {
  console.log("Common chat rooms created: ", rooms);
});

io.sockets.on('connection', function(socket) {
  socket.on("login", function (userdata) {
    var data = {};
    var getUserId = "";
    dbScripts.userLogin(userdata).then(function (result) {
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
        io.to[getUserId].emit('login done', data);
        console.log("===================================================");
      }
    });
  });
  socket.on("load-latest-messages", function (request) {
    loadMessages.latestMessages(request).then(function (response) {
      if (response) {
        users[request].emit('latest-messages', response);
      }
    });
  });
  socket.on("load-previous-messages", function (request) {
    var data = {};
    users[request.id].emit('previous-messages', data);
  });
  socket.on("friend-list", function (request) {
    friendListUtility.getFriendList(request, users).then(function (response) {
      users[request].emit('get-friend-list', response);
    });
  });
  socket.on("search-user", function (searchData) {
    searchUserUtility.searchUser(searchData).then(function (response) {
      users[searchData.id].emit('search-user-list', response);
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
  socket.on("get-user-profile", function (request) {
    userProfileUtility.getUserProfile(request, users).then(function (response) {
      users[request.userId].emit('user-profile', response);
    });
  });
  socket.on('send-message', function (detail) {
    console.log("Sender Detail: ", detail);
    detail.currentDate = new Date();
    // The below logic is to update the data and emit it to friend if chat reference id find in request
    if (detail.chatReferenceId) {
      chatConversationUtility.chatReferenceIdExistAndUpdateMessage(detail).then(function (response) {
        if (users[detail.sentTo]) {
          users[detail.sentTo].emit('receive-message', detail);
        }
        console.log("Message Sent: ", detail);
        users[detail.sentBy].emit('receive-message', detail);
      });
    } else { // The below logic is to update the data and emit to friend if chat reference id not exist in request
      chatConversationUtility.chatReferenceIdNotExist(detail).then(function (response) {
        chatConversationUtility.chatReferenceIdExistAndUpdateMessage(response).then(function (updatedResponse) {
          if (users[detail.sentTo]) {
            users[detail.sentTo].emit('receive-message', detail);
          }
          console.log("Message Sent: ", detail);
          users[detail.sentBy].emit('receive-message', detail);
        });
      });
    }
  });
  socket.on('update-read-status', function (request) {
    chatConversationUtility.updateMessageReadStatus(request).then(function (response) {
      request.status = response;
      users[request.userId].emit('message-status', request);
    });
  });
  socket.on('typing', function (request) {
    if (users[request.friendId]) {
      users[request.friendId].emit('user-is-typing', request.typing);
    }
  });
  socket.on('join-chat-room', function (request) {
    console.log("Joining chat room", request);
    socket.join(request.chatRoom);
    console.log("Room joined");
    chatRooms.roomUsers(request).then(function (response) {
      console.log("response", response);
      var buildResponse = {
        room: request.chatRoom,
        nickName: request.nickName
      };
      users[request.id].emit('chat-room-name', buildResponse);
    });
  });
  socket.on('chat-room-users', function (request) {
    var roomName = request.trim();
    chatRooms.getChatRoomUsers(roomName).then(function (response) {
      console.log("Room: ", roomName);
      io.to(roomName).emit('get-chat-users', response);
      console.log("Emitted");
    });
  });
  socket.on('chat-room-message', function (request) {
    var buildResponse = {
      message: request.message,
      userName: request.nickName,
      roomUserId: request.userId
    };
    io.to(request.room).emit('room-message', buildResponse);
  });
  socket.on('req-country-list', function (request) {
    chatRooms.countryList().then(function (response) {
      users[request].emit('country-list', response);
    });
  })
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

  function registerUser(req, res, next) {
    var msg = {};
    var filterData = {email: 1};
    var data = req.body;
    dbConnect.findQueryInDB(dbCollectionName.userProfile, filterData, function (result) {
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
        dbConnect.insertInDB(dbCollectionName.userProfile, data, function (response) {
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
