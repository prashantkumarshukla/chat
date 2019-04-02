var Promise = require('promise');
var dbConnect = require('./database-connection-util');
var dbCollectionName = {
  'userProfile' : 'userProfile',
  'friendList' : 'friendList',
  'conversations' : 'conversations'
};
module.exports = {
  searchUserProfile: function (searchData) {
    return new Promise(function (resolve, reject) {
      var filterData = {$or: [{fName: searchData.searchString}, {lName: searchData.searchString}]};
      dbConnect.findQueryInDB(dbCollectionName.userProfile, filterData, function (userProfileResp) {
        
      })
    });
  }
};
