var Promise = require('promise');
var dbConnect = require('./database-connection-util');
var dbCollectionName = {
  'userProfile' : 'userProfile',
  'friendList' : 'friendList',
  'conversations' : 'conversations'
};
module.exports = {
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
  validateFriendList: function (friendId, userId) {
    return new Promise(function (resolve, reject) {
      var query = {$or: [{senderId: friendId}, {receiverId: userId}]};
      dbConnect.findQueryInDB(dbCollectionName.friendList, query, function (response) {
        resolve(response);
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
  }
};
