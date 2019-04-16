var Promise = require('promise');
var utility = require('./utility');
var rooms = [];
var chatRooms = [];
var chatRoomUsers = [];
var country;
module.exports = {
  countryList: function() {
    return new Promise(function (resolve, reject) {
      resolve(country);
    });
  },
  createRoom: function () {
    return new Promise(function (resolve, reject) {
      utility.countryAndState().then(function (response) {
        country = JSON.parse(response)['countries'];
        country.forEach(function(list) {
          var states = list.states;
          states.forEach(function (item) {
            var roomName = item.code;
            rooms.push(roomName.trim());
            chatRooms[roomName.trim()] = [];
          });
        });
        resolve(rooms);
      }).catch(function (reason) {
        console.log("Reason", reason);
      });
    });
  },
  roomUsers: function (requestData) {
    return new Promise(function (resolve, reject) {
      var roomName = requestData.chatRoom;
      if (!chatRoomUsers[requestData.id]) {
        chatRoomUsers[requestData.id] = roomName;
        var userDetail = {
          'id': requestData.id,
          'nickName': requestData.nickName,
          'age': requestData.age,
          'gender': requestData.gender,
          'location': requestData.chatRoom,
          'allowProfilePic': false};
        chatRooms[roomName].push(userDetail);
        console.log("Chat room users", chatRooms[roomName]);
      }
      resolve(chatRooms[roomName]);
    });
  },
  getChatRoomUsers: function (requestData) {
    return new Promise(function (resolve, reject) {
      resolve(chatRooms[requestData]);
    });
  }
};
