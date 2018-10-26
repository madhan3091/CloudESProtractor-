//var MongoClient = require('../db.js');
//const assert = require('assert');



const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}

module.exports = insertDocuments;

// // Connection URL
// const url = 'mongodb://localhost:27017';
 
// // Database Name
// const dbName = 'cloudes-staging';
 
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
 
//   const db = client.db(dbName);
 
//   insertDocuments(db, function() {
//   client.close();
//   });
// });