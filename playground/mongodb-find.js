// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://34.226.198.212:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  /* Example 1
  db.collection('Users').find({
    _id: new ObjectID('5b515bf912a49c5f88852b50')
  }).toArray().then((docs) => {
    console.log('Todos') ;
    console.log(JSON.stringify(docs, undefined, 4));
  }, (err) => {
    console.log(err);
  });
  */
  // Example2
  db.collection('Users').find().count().then((countnumber) => {
    console.log('Todos') ;
    console.log(`Todos count is: ${countnumber}`);
  }, (err) => {
    console.log(err);
  });
  //

  client.close();
});
