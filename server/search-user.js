var dbScripts = require('./database-scripts');
var Promise = require("promise");
module.exports = {
  searchUser: function (searchData) {
    return new Promise(function (resolve, reject) {
      dbScripts.searchUserProfile(searchData).then(function (searchResponse) {
        var buildResponse = [];
        searchResponse.forEach(function (data) {
          dbScripts.validateFriendList(data.id, searchData.id).then(function (friendResponse) {
            if (friendResponse.length > 0) {
              friendResponse.forEach( function (value) {
                value.friendStatus     = value.status;
                value.isFriend = true;
                buildResponse.push(value);
              });
            } else {
              friendResponse.isFriend = true;
              friendResponse.friendStatus = friendResponse.status;
              buildResponse.push(friendResponse);
            }
          });
          buildResponse.push(data);
        });
        resolve(buildResponse);
      })
    });
  }
};
