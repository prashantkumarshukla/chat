//console.log("server is starting");
var fs = require('fs');

var express = require('express');

var path = require('path');

var http = require('http');

//var port = process.env.Port || 5000;

var app = express();

var server = http.createServer(app);

var io = require('socket.io').listen(server);

var users = {};

var userDetail = {};

var friendList = {};

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

  socket.on("login", function(userdata) {

    var getFile = fs.readFileSync('server/users.json');

    var readJson = JSON.parse(getFile);

    var existData = readJson.users;

    var userStatus = false;

    var data = {};

    var getUserId = "";

    for(var i=0; i < existData.length; i++){

      if(existData[i].email == userdata.userName && existData[i].userPwd == userdata.userPassword){

        userStatus = true;

        getUserId = existData[i].id;

        socket.userId = existData[i].id;

        users[socket.userId] = socket;

        data = {
          "userEmail" : userdata.userName,
          "userId" : existData[i].id,
          "success" : true,
          "userName" : existData[i].fName + " " + existData[i].lName
        };

        userDetail[getUserId] = data;

        console.log("Users:", userDetail[getUserId]);

        break;
      }

    }

    if(userStatus){

      socket.emit("login done", data);

      console.log("===========User logged in successfully=============");

      console.log(data);

      console.log("===================================================");

    } else {

      data = {"status" : false};

      users[getUserId].emit('login done',data);
    }

  });

  socket.on("logout", function(userdata) {

    delete clients[socket.id]; // remove the client from the array
    delete users[hs.session.userId];
  });

  socket.on('chating', function (data) {

      var toSocketId = data.toSocketId;

      var fromSocketId = data.fromSocketId;

      delete data.toSocketId;

      data.timestamp = Math.floor(new Date() / 1000);

      console.log("=======Chat message:", data.message);

      console.log("========Friend ID:", toSocketId);

      if(toSocketId in users){


        var friendStatus = checkFriend(toSocketId,fromSocketId);

        var onlineStatus = isOnlineUser(fromSocketId);

        var recieveData = {

          "userId" : fromSocketId,

          "message" : data.message,

          "userInfo": userDetail[fromSocketId],

          "isFriend" : friendStatus,

          "isOnline" : onlineStatus,

          "requestType" : "recieved"

        };

        delete recieveData.userInfo.userId;

        users[toSocketId].emit('new message',recieveData);

        console.log("=================================Message to Friend================================================");

        console.log(recieveData);

        console.log("==================================================================================================");

        var sendData = {

          "userId" : toSocketId,

          "message" : data.message,

          "userInfo": userDetail[toSocketId],

          "isFriend" : friendStatus,

          "isOnline" : onlineStatus,

          "requestType" : "sent"

        };

        delete sendData.userInfo.userId;

        users[fromSocketId].emit('new message',sendData);

        console.log("=================================Message back to User=============================================");

        console.log(sendData);

        console.log("==================================================================================================");

      }

      function checkFriend(friendId, userId) {

        var friendStatus = false;

        if(userId in friendList){

          var getFriendList = friendList[userId].friends;

          for(var i=0; i<getFriendList.length; i++){

            if(friendId == getFriendList[i].friendId){

              friendStatus = true;

              break;

            }

          }

        }

        return friendStatus;

      }

      function isOnlineUser(userId) {

        var online = false;

        if(userId in users){

          online = true;

        }

        return online;

      }

  });

  socket.on("friend-list", function (id) {

    var fileName = "server/friend-list/" + id + "-friend-list.json";

    var readFile = fs.readFileSync(fileName);

    var readJson = JSON.parse(readFile);

    var friendLists = readJson.firendList;

    var buildList = [];

    for (var i = 0; i < friendLists.length; i++) {

      if (friendLists[i].status == true) {

          var friendId = friendLists[i].friendId;

          friendLists[i] = getProfileDetail(friendId);

          friendLists[i].friendId = friendId;

          friendLists[i].isFriend = true;

          friendLists[i].isOnline = checkUserOnline(friendId);

            delete friendLists[i]['friendListFile'];

            delete friendLists[i]['messageBook'];

            delete friendLists[i]['status'];

            delete friendLists[i]['birthday'];

            delete friendLists[i]['email'];

            delete friendLists[i]['fName'];

            delete friendLists[i]['lName'];

            buildList.push(friendLists[i]);


      }

    }

    friendList[id] = {"friends" : buildList};

    users[id].emit("friend-list-sent",friendList[id]);

    console.log("=================================Friend List==================================================");

    console.log("Friend List for: ", id);

    console.log(friendList[id]);

    console.log("==============================================================================================");

  });

  function getProfileDetail(id) {

    var fileName = "server/user-profile-detail/" + id + "-profile.json";

    var readFile = fs.readFileSync(fileName);

    var readJson = JSON.parse(readFile);

    return readJson;

  }

  function checkUserOnline(id) {

    if(id in users){

      return true;

    } else {

      return false;
    }

  }

  socket.on("typing", function (data) {

    var fromSocketId = data.userId;

    var toSocketId = data.friendId;

    var userName = userDetail[fromSocketId].userName;

    var typingStatus = data.typingStatus;

    var sendData = {};

    if(typingStatus != "none"){

      sendData = {

        "typingMsg" : userName + " is typing...",

        "friendId" : fromSocketId

      };

    } else {

      sendData = {

        "typingMsg" : "false",

        "friendId" : fromSocketId

      };
    }

    users[toSocketId].emit("user-is-typing", sendData);

  });

});


const bodyParser = require('body-parser');

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

  console.log("Registration detail", req);

  var getFile = fs.readFileSync('server/users.json');
  var readJson = JSON.parse(getFile);

  var existData = readJson.users;
  var newData = req.body;

  var dataToLoad = [];
  var data = {};

  var existUser = "";

  var msg = {};

  console.log("Exist data", existData);

  if (Array.isArray(existData)) {

    existUser = checkUserExist(newData.email, existData, "registration");

    if (existUser == false) {

      console.log("user Not exist, registration can proceed");

      profileCreation(newData);

      existData.push(newData);

      dataToLoad = existData;

      console.log("User Not exist");

      data.users = dataToLoad;

      var datatoWrite = JSON.stringify(data, null, 2);

      console.log("File is about to create", datatoWrite);

      fs.writeFile('server/users.json', datatoWrite, finished);

      function finished(err) {

        console.log("Successfully user added");

        msg = {
          "status": "true",
          "info": "Woow Great! You have successfully registered."
        };

        res.send(msg);
      }

    } else {

      msg = {
        "status": "false",
        "info": "Your email id is already registered with us."
      };

      res.send(msg);
    }

  }

}

function checkUserExist(newData, oldData, formType) {

  var status = false;

  if (formType == "registration") {

    for (var i = 0; i < oldData.length; i++) {

      if (newData == oldData[i].email) {

        status = true;
        break;
      }
    }

  } else {

    if (formType == "login") {

      for (var i = 0; i < oldData.length; i++) {

        if (newData.userName == oldData[i].email && newData.userPassword == oldData[i].userPwd) {

          var reply = {};
          reply.valid = true;
          reply.id = oldData[i].id;

          status = reply;
          break;
        }
      }
    }
  }
  return status;
}

function profileCreation(newData) {

  var friendListFileName = friendListFileCreation(newData.id);
  var messageBookName = messageBookCreation(newData.id);

  var fileName = newData.id + "-profile.json";

  var profileDetail = {};
  profileDetail.fName = newData.fName;
  profileDetail.lName = newData.lName;
  profileDetail.name = newData.fName + " " +newData.lName;
  profileDetail.email = newData.email;
  profileDetail.gender = newData.gender;
  profileDetail.birthday = newData.birthday;
  profileDetail.friendListFile = friendListFileName;
  profileDetail.messageBook = messageBookName;

  var writeInFile = JSON.stringify(profileDetail, null, 2);

  console.log("Profile creation started", profileDetail);

  fs.writeFileSync('server/user-profile-detail/' + fileName, writeInFile, finished);

  function finished(status) {

    console.log("Status is", status);

  }

}

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

app.post('/search', searchUsers);

function searchUsers(req, res, next) {

  var getFile = fs.readFileSync('server/users.json');
  var readJson = JSON.parse(getFile);

  var existUser = readJson.users;
  var userData = req.body;
  var searchString = userData.searchField;
  var searchResult = [];
  var reply = {}

  for (var i = 0; i < existUser.length; i++) {

    if (existUser[i].fName.toLowerCase() == searchString.toLowerCase() || existUser[i].lName.toLowerCase() == searchString.toLowerCase() || existUser[i].email.toLowerCase() == searchString.toLowerCase()) {
      var dataToSend = {};
      dataToSend.name = existUser[i].fName + " " + existUser[i].lName;
      dataToSend.email = existUser[i].email;
      dataToSend.friendId = existUser[i].id;
      dataToSend.isFriend = false;
      dataToSend.isOnline = isFriendOnline(existUser[i].id);
      searchResult.push(dataToSend);
    }
  }

  reply.results = searchResult;
  console.log("Search Result: ", reply);
  res.send(reply);
}

function isFriendOnline(friendId) {

  var getFile = fs.readFileSync('server/online-users.json');
  var readJson = JSON.parse(getFile);
  var userList = readJson.users;
  var isOnline = false;

  for (var i = 0; i < userList.length; i++) {

    if (friendId == userList[i].id) {

      isOnline = true;
      break;
    }
  }

  return isOnline;
}

app.post('/send-friend-request', sendFriendRequest);

function sendFriendRequest(req, res, next) {

  var msg = {};

  var addFriend = "";

  var selfUser = friendListCreation(req.body.userId,req.body.friendId,"sent");


  if (selfUser == true) {

    addFriend = friendListCreation(req.body.friendId,req.body.userId,"received");

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

function friendListCreation(fromId,toId,reqType) {

  var msg;

  var fileName = "server/friend-list/" + fromId + "-friend-list.json";

  var readFile = fs.readFileSync(fileName);

  var readJson = JSON.parse(readFile);

  var friendList = readJson.firendList;

  friendList.push({"friendId": toId, "status": "pending","reqType" : reqType});

  var getData = {};

  getData.firendList = friendList;

  var dataToWrite = JSON.stringify(getData, null, 2);

  var fileWrite = fs.writeFileSync(fileName, dataToWrite);

  msg = true;

  console.log("MSG", fileWrite);

  return msg;

}

app.post('/friend-request', newFriendRequest);

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

}

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

  if(req.body.action == "accept") {

    confirm = true;

  }

  if(req.body.action == "delete") {

    confirm = false;

  }

  var selfUserConfirmation = confirmRequest(req.body.userId, req.body.friendId, confirm);

  var toUserConfirmation;

  if (selfUserConfirmation == true) {

    toUserConfirmation = confirmRequest(req.body.friendId, req.body.userId, confirm);

    if(toUserConfirmation == true) {

      msg = {

        "info" : "You accepted the request successfully",
        "status" : "true"
      };

    } else {

      msg = {

        "info" : "You declined the request successfully",
        "status" : "false"
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

  for(var i=0; i< friendList.length; i++){

    if(toId == friendList[i].friendId && confirm){

      friendList[i].status = confirm;

    } else {

      if(toId == friendList[i].friendId && !confirm){

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
