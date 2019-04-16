var Promise = require('promise');
var dbConnect = require('./database-connection-util');
var utility = require('./utility');
var dbCollectionName = {
  'userProfile' : 'userProfile',
  'friendList' : 'friendList',
  'conversations' : 'conversations',
  'chatReference' : 'chatReference',
  'messageReference' : 'messageReference'
};
module.exports = {
  userLogin: function(userdata) {
    return new Promise(function (resolve, reject) {
      var userStatus = false;
      var filterData = {email: userdata.userName};
      dbConnect.findQueryInDB(dbCollectionName.userProfile,  filterData, function (response) {
        resolve(response);
      });
    });
  },
  userProfiles: function(userIds) {
    return new Promise(function (resolve, reject) {
      var query = { id: { $in: userIds } };
      dbConnect.findQueryInDB(dbCollectionName.userProfile, query, function (response) {
        resolve(response);
      });
    });
  },
  searchUserProfile: function (searchData) {
    return new Promise(function (resolve, reject) {
      var filterData = {$or: [{fName: searchData.searchString}, {lName: searchData.searchString}]};
      dbConnect.findQueryInDB(dbCollectionName.userProfile, filterData, function (response) {
        resolve(response);
      });
    });
  },
  friendList: function(requestData) {
    return new Promise(function (resolve, reject) {
      var filterData = {$and: [{$or: [{receiverId: requestData}, {senderId: requestData}]}, {status: 'Approved'}]};
      dbConnect.findQueryInDB(dbCollectionName.friendList, filterData, function (response) {
        resolve(response);
      });
    });
  },
  friendListWithAllStatus: function(requestData) {
    return new Promise(function (resolve, reject) {
      var filterData = {$and: [{$or: [{receiverId: requestData}, {senderId: requestData}]}]};
      dbConnect.findQueryInDB(dbCollectionName.friendList, filterData, function (response) {
        resolve(response);
      });
    });
  },
  validateFriendList: function (friendId, userId) {
    return new Promise(function (resolve, reject) {
      var query = {$or: [{senderId: friendId}, {receiverId: userId}]};
      dbConnect.findQueryInDB(dbCollectionName.friendList, query, function (response) {
        if (response.length === 0) {
          query = {$or: [{senderId: userId}, {receiverId: friendId}]};
          dbConnect.findQueryInDB(dbCollectionName.friendList, query, function (response) {
            resolve(response);
          });
        } else {
          resolve(response);
        }
      });
    });
  },
  friendRequest: function (requestData) {
    return new Promise(function (resolve, reject) {
      var filterData = {$and: [{receiverId: requestData}, {status: 'Pending'}]};
      dbConnect.findQueryInDB(dbCollectionName.friendList, filterData, function (response) {
        resolve(response);
      });
    });
  },
  newFriendRequest: function (requestData) {
    return new Promise(function (resolve, reject) {
      dbConnect.insertInDB(dbCollectionName.friendList, requestData, function (response) {
        resolve(response);
      });
    });
  },
  confirmFriendRequest: function (requestData) {
    return new Promise(function (resolve, reject) {
      var query = {$and: [{receiverId: requestData.senderId}, {senderId: requestData.receiverId}]};
      var data = { $set: {status: requestData.action}};
      dbConnect.updateInDB(dbCollectionName.friendList, query, data, function (response) {
        resolve(response);
      });
    });
  },
  denyFriendRequest: function (requestData) {
    return new Promise(function (resolve, reject) {
      var query = {$and: [{receiverId: requestData.senderId}, {senderId: requestData.receiverId}]};
      dbConnect.deleteFromDB(dbCollectionName.friendList, query, function (response) {
        resolve(response);
      });
    });
  },
  getAllChatReferenceId: function (requestData) {
    return new Promise(function (resolve, reject) {
      var query = {$or: [{receiverId: requestData}, {senderId: requestData}]};
      dbConnect.findQueryInDB(dbCollectionName.chatReference, query, function (response) {
        resolve(response);
      });
    });
  },
  validateChatReferenceId: function (requestData) {
    return new Promise(function (resolve, reject) {
      var query = {$and: [{$or: [{receiverId: requestData.receiverId}, {senderId: requestData.senderId}]}]};
      dbConnect.findQueryInDB(dbCollectionName.chatReference, query, function (response) {
        if (response.length === 0) {
          query = {$and: [{$or: [{receiverId: requestData.senderId}, {senderId: requestData.receiverId}]}]};
          dbConnect.findQueryInDB(dbCollectionName.chatReference, query, function (response) {
            resolve(response);
          });
        } else {
          resolve(response);
        }
      });
    });
  },
  createChatReferenceId: function (requestData) {
    return new Promise(function (resolve, reject) {
      utility.createUniqueNumber().then(function (uniqueNo) {
        var dataToInsert = {
          receiverId: requestData.receiverId,
          senderId: requestData.senderId,
          chatReferenceId: uniqueNo
        };
        dbConnect.insertInDB(dbCollectionName.chatReference, dataToInsert, function (response) {
          var buildResponse = {status: response, chatReferenceId: uniqueNo};
          resolve(buildResponse);
        });
      });
    });
  },
  saveConversations: function (requestData) {
    console.log("Before updating: ", requestData);
    return new Promise(function (resolve, reject) {
      dbConnect.insertInDB(dbCollectionName.conversations, requestData, function (response) {
        resolve(response);
      })
    });
  },
  retrieveConversations: function(requestData) {
    return new Promise(function (resolve, reject) {
      dbConnect.findQueryInDB(dbCollectionName.conversations, requestData, function (response) {
        resolve(response);
      });
    });
  },
  pushConversations: function (requestData, chatReferenceId) {
    return new Promise(function (resolve, reject) {
      var query = {'chatReferenceId': chatReferenceId};
      var dataToPush = {$push: {'conversations': requestData }};
      dbConnect.pushInDB(dbCollectionName.conversations, query, dataToPush);
      resolve(true)
    });
  },
  updateMsgReadStatus: function (query, fieldToUpdate, multiTrue) {
    return new Promise(function (resolve, reject) {
      dbConnect.updateRows(dbCollectionName.conversations, query, fieldToUpdate, multiTrue);
      console.log("Unread status updated");
      resolve(true);
    });
  }
};
