var fs = require("fs");
var Promise = require("promise");
var dbScripts = require('./database-scripts');
module.exports = {
  countryAndState: function () {
    return new Promise(function (resolve, reject) {
      fs.readFile('./server/country-list.json','utf-8', function (err, resp) {
        resolve(resp);
      });
    });
  },
  createUniqueNumber: function () {
    return new Promise(function (resolve, reject) {
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth();
      var currentDate = today.getDate();
      var hours = today.getHours();
      var minutes = today.getMinutes();
      var seconds = today.getSeconds();
      var miliseconds = today.getMilliseconds();
      var generatedNo = year.toString() + month.toString() + currentDate.toString() + hours.toString() +
        minutes.toString() + seconds.toString() + miliseconds.toString();
      resolve(generatedNo);
    });
  },
  createUserData: function (userId) {
    return new Promise(function (resolve, reject) {
      dbScripts.friendListWithAllStatus(userId).then(function (userDetails) {
        var detail = {};
        if(userDetails.length > 0) {
          detail.friendStatus = userDetails[0].status;
          detail.message = request.message;
          detail.requestType = 'received';
          detail.unread = true;
          detail.communicationId = '';
          //users[request.receiverId].emit('receive-message', detail);
        }
        resolve(detail);
      });
    });
  }
};
