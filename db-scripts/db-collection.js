var mongoClient = require('mongodb');

var mongoUrl = 'mongodb://localhost:27017/';

mongoClient.connect(mongoUrl, function (err,db) {

  if(err) throw err;

  var dbo = db.db('chatdb');

  dbo.createCollection('userProfile',function (err, res) {

    if(err) throw err;

    console.log('User profile collection created');

    db.close();

  });

  dbo.createCollection('friendList',function (err, res) {

    if(err) throw err;

    console.log('Friend list collection created');

    db.close();

  });

  dbo.createCollection('messageBook',function (err, res) {

    if(err) throw err;

    console.log('Message book collection created');

    db.close();

  });

});
