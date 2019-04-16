var Promise = require('promise');
var dbScripts = require('./database-scripts');
module.exports = {
  latestMessages: function (request) {
    return new Promise(function (resolve, reject) {
      dbScripts.getAllChatReferenceId(request).then(function (chatReferences) {
        console.log("All references: ", chatReferences);
        var ids = [];
        var profileId = [];
        if (chatReferences.length > 0) {
          chatReferences.forEach(function (references) {
            ids.push(references.chatReferenceId);
            (request !== references.senderId) ? profileId.push(references.senderId) :
              profileId.push(references.receiverId);
          });
          var query = { chatReferenceId: { $in: ids } };
          dbScripts.retrieveConversations(query).then(function (response) {
            console.log("All messages: ", response);
            if (response.length > 0) {
              var getAllMessages = [];
              response.forEach(function (data) {
                var conversations = data.conversations;
                var buildResponse = {
                  chatReferenceId: data.chatReferenceId,
                  messages: (conversations.length > 5) ?
                    conversations.slice(Math.max(conversations.length -5, 1)) : conversations
                };
                //getAllMessages.push(buildResponse);
              });

              resolve(getAllMessages);
            } else {
              reject(false);
            }
          });
        }
      });
    });
  },
  previousMessages: function (request) {
    
  }
};
