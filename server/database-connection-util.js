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
  },
  insertInDB: function (collectionName, data, callback) {
    mongoClient.connect(mongoUrl, function (err, db) {
      if (err) {
        console.log('Database not connected: ' + err);
        callback(false);
      } else {
        var dbo = db.db(dbName);
        dbo.collection(collectionName)
          .insertOne(data, function (err, res) {
            if (err) {
              console.log('Data insertion failed: ' + err);
              callback(false);
            } else {
              console.log(res.insertedCount + ': Data inserted successfully ');
              callback(true);
              db.close();
            }
          });
      }
    });
  },
  deleteFromDB: function (collectionName, query, callback) {
    mongoClient.connect(mongoUrl, function (err, db) {
      if (err) {
        console.log('Database not connected: ' + err);
        callback(false);
      } else {
        var dbo = db.db(dbName);
        dbo.collection(collectionName)
          .deleteOne(query, function (err, res) {
            if (err) {
              console.log('Data Deletion failed: ' + err);
              callback(false);
            } else {
              console.log(res.insertedCount + ': Data Deletion successfully ');
              callback(true);
              db.close();
            }
          });
      }
    });
  },
  updateInDB: function(collectionName, filter, data, callback) {
    mongoClient.connect(mongoUrl, function (err, db) {
      if (err) {
        console.log('Database not connected: ' + err);
        callback(false);
      } else {
        var dbo = db.db(dbName);
        dbo.collection(collectionName)
          .updateOne(filter, data, function (err, res) {
            if (err) {
              console.log('Data updation failed: ' + err);
              callback(false);
            } else {
              console.log(res.insertedCount + ': Data updated successfully ');
              callback(true);
              db.close();
            }
          });
      }
    });
  }
};
