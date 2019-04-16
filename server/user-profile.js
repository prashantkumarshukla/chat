var dbScripts = require('./database-scripts');
var Promise = require("promise");
module.exports = {
  getUserProfile: function (request, users) {
    return new Promise(function (resolve, reject) {
      var ids = [];
      ids.push(request.friendId);
      dbScripts.userProfiles(ids).then(function (userDetails) {
        var buildResponse = userDetails[0];
        console.log("User Details: ", buildResponse);
        dbScripts.validateFriendList(request.userId, request.friendId).then(function (response) {
          console.log("Profile Response: ", response);
          if (response.length > 0) {
            buildResponse.isFriend = (response[0].status === 'Approved');
            buildResponse.friendStatus = response[0].status;
            buildResponse.isOnline = !!users[request.friendId];
          } else {
            buildResponse.isFriend = false;
          }
          console.log("Profile Data: ", buildResponse);
          var requestData = {senderId: request.userId, receiverId: request.friendId};
          dbScripts.validateChatReferenceId(requestData).then(function(refResponse) {
            if (refResponse.length > 0) {
              buildResponse.chatReferenceId = refResponse[0].chatReferenceId;
            }
            console.log("Response to emit: ", buildResponse);
            //users[request.userId].emit('user-profile', buildResponse);
            resolve(buildResponse);
          });
        });
      });
    });
  }
};
