var mongoClient = require('mongodb');

var mongoUrl = 'mongodb://localhost:27017/';

// Delete query
mongoClient.connect(mongoUrl, function (err,db) {

  console.log('find db called: ');

  if(err) {

    console.log('Database not connected: ' +  err);
  } else {

    var dbo = db.db('chatdb');

    var myquery = {};

    dbo.collection('conversations')
      .find(myquery).toArray(function(err, result) {

        if(err) {
          console.log('Query not executed: ' +  err);
        } else {
          //console.log('Query executed', result);
          result.forEach(function (response) {
            console.log(response);
          });

          db.close();
        }
      });
  }
});
