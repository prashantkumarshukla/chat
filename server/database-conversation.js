var fs = require("fs");
var Promise = require("promise");
var dbScripts = require('./database-scripts');
module.exports = {
  chatReferenceIdExistAndUpdateMessage: function (request) {
    return new Promise(function (resolve, reject) {
      var msgToStore = {
        messageId: request.messageId,
        messages: request.message,
        sentBy: request.sentBy,
        unread: request.unread,
        dateAndTime: request.currentDate
      };
      var buildResponse = {};
      dbScripts.retrieveConversations(request.chatReferenceId).then(function (conversations) {
        if (conversations.length === 0) { // First time conversation
          var conversationsUpdate = {
            chatReferenceId : request.chatReferenceId,
            conversations: [msgToStore]
          };
          dbScripts.saveConversations(conversationsUpdate).then(function (response) {
            resolve(response);
          });
        } else { // If conversation already exist
          console.log("Conversation exist: ", conversations);
          dbScripts.pushConversations(msgToStore, request.chatReferenceId).then(function (response) {
            resolve(response);
          });
        }
      });
    });
  },
  chatReferenceIdNotExist: function (requestData) {
    return new Promise(function (resolve, reject) {
      dbScripts.validateChatReferenceId(requestData).then(function (response) {
        console.log("Validate Reference:", response);
        if (response.length === 0) {
          dbScripts.createChatReferenceId(requestData).then(function (chatRefIdResponse) {
            requestData.chatReferenceId = chatRefIdResponse.chatReferenceId;
            resolve(requestData);
          });
        }
      });
    });
  },
  getFriendStatus: function (request) {
    return new Promise(function (resolve, reject) {
      dbScripts.friendListWithAllStatus(request.senderId).then(function (userDetails) {
        request.friendStatus = userDetails[0].status;
        request.isFriend = (userDetails[0].status === 'Approved');
        resolve(request);
      });
    });
  },
  updateMessageReadStatus: function (request) {
    return new Promise(function (resolve, reject) {
      var query = {'chatReferenceId': request.chatReferenceId};
      var fieldToUpdate = { $set : { 'conversations.$[].unread': false}};
      var multiTrue = {multi : true};
      dbScripts.updateMsgReadStatus(query, fieldToUpdate, multiTrue).then(function (msgStatus) {
        console.log("Unread status: ", msgStatus);
        resolve(msgStatus);
      });
    });
  }
};
