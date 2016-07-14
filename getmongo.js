var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/LFST';


var insertDocument = function(db, callback, insert) {
   db.collection('LFSTCol').insertOne( insert, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};

var findLFST = function(db, callback) {
   var cursor =db.collection('LFSTCol').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};



/*
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});
*/
/*
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});*/
/*
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db, function() {
      db.close();
  });
});
*/
