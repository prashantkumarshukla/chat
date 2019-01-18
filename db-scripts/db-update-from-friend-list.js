var mongoClient = require('mongodb');

var mongoUrl = 'mongodb://localhost:27017/';


//Insert query

mongoClient.connect(mongoUrl, function (err,db) {

  console.log('friend list table called: ');

  if(err) {

    console.log('Database not connected: ' +  err);

  } else {

    var dbo = db.db('chatdb');
    var query = {"$and":[{"senderId":"1545956735814"},{"receiverId":"1545956956173"}]};

    var data ={"$set":{"status":"Pending"}};

    dbo.collection('friendList')
      .updateOne(query, data, function(err, result) {

      if(err) {

        console.log('Query not executed: ' +  err);

      } else {

        db.close();

        console.log('Result is: '+ JSON.stringify(result));
      }

    });
  }
});
