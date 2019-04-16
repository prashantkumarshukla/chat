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
    var data = {$push:
        {'conversations':
            {
              'messageId' : 5162,
              'messages': 'some text',
              'unread': true,
              'dateAndTime': '2019-04-12T14:33:43.017Z '
            }
        }};

    dbo.collection('conversations').update(myquery,data);
    db.close();
  }
});
