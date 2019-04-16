var mongoClient = require('mongodb');

var mongoUrl = 'mongodb://localhost:27017/';

// Delete query
mongoClient.connect(mongoUrl, function (err,db) {

  console.log('find db called: ');

  if(err) {

    console.log('Database not connected: ' +  err);
  } else {

    var dbo = db.db('chatdb');

    var myquery = {'chatReferenceId': '20193126575850'};
    var fieldToUpdate = { $set : { 'conversations.$[].unread': false}};
    var multiTrue = {multi : true};
      dbo.collection('conversations').update(myquery, fieldToUpdate,multiTrue);
    db.close();
  }
});
