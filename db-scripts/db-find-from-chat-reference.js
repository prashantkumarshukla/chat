var mongoClient = require('mongodb');

var mongoUrl = 'mongodb://localhost:27017/';


//Insert query

mongoClient.connect(mongoUrl, function (err,db) {

  console.log('friend list table called: ');

  if(err) {

    console.log('Database not connected: ' +  err);

  } else {

    var dbo = db.db('chatdb');

    dbo.collection('chatReference')
      .find({}, {}).toArray(function(err, result) {

      if(err) {

        console.log('Query not executed: ' +  err);

      } else {

        db.close();

        console.log('Result is: '+ JSON.stringify(result));
      }

    });
  }
});
