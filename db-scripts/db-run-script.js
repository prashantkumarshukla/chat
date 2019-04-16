var mongoClient = require('mongodb');
var mongoUrl = 'mongodb://localhost:27017/';

mongoClient.connect(mongoUrl, function (err,db) {
  if(err) throw err;
  var dbo = db.db('chatdb');

  dbo.createCollection('chatReference',function (err, res) {
    if(err) throw err;
    console.log('Chat Reference collection created');
    db.close();
  });
  dbo.createCollection('messageReference',function (err, res) {
    if(err) throw err;
    console.log('Message Reference collection created');
    db.close();
  });
});
