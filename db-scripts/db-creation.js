var mongoClient = require('mongodb');

var mongoUrl = 'mongodb://localhost:27017/chatdb';

mongoClient.connect(mongoUrl, function (err,db) {

  if(err) throw err;

  console.log('DB is created:');

  db.close();
});
