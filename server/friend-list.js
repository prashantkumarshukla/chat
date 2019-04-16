var dbScripts = require('./database-scripts');
var Promise = require("promise");
module.exports = {
  getFriendList: function (request, users) {
    return new Promise(function (resolve, reject) {
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
            detail.isOnline = !!users[detail.id];
            buildResponse.push(detail);
          });
          buildResponse.forEach(function(data) {
            var requestData = {senderId: request, receiverId: data.id};
            dbScripts.validateChatReferenceId(requestData).then(function(refResponse) {
              data.chatReferenceId = refResponse[0].chatReferenceId;
              resolve(data);
            });
          });
        });
      });
    });
  }
};
