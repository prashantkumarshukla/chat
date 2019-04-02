var mongoClient = require('mongodb');
var mongoUrl = 'mongodb://localhost:27017/';
var dbName = 'chatdb';
var Promise = require('promise');
module.exports = {
  findQueryInDB: function (collectionName, data, callback) {
    mongoClient.connect(mongoUrl, function (err, db) {
      if (err) {
        console.log('Database not connected: ' + err);
        callback(false);
      } else {
        var dbo = db.db(dbName);
        dbo.collection(collectionName)
          .find(data).toArray(function (err, result) {
          if (err) {
            console.log('Query not executed: ' + err);
            callback(false);
          } else {
            callback(result);
            db.close();
          }
        });
      }
    });
  }
};
