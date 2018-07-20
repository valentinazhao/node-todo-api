// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
/*
// ES6 destructuring example
var user = {name: 'Andrew', age: 25};
var {name} = user;
console.log(name); // a fantasy way to make a new variable from object's properties
*/
/*
var obj = new ObjectID();
console.log(obj);
*/

MongoClient.connect('mongodb://34.226.198.212:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // Insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
    // _id: 123,
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  });

  client.close();
});
