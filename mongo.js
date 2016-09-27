var db;
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection local URL
// var url = 'mongodb://localhost:27017/Todonodek';

// Connection mongolab URL
var url = 'mongodb://heroku_8cn95n6p:3jrhkaspd17dn36bgho8ue7rnk@ds041486.mlab.com:41486/heroku_8cn95n6p';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, mongodb) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  db = mongodb;
});

var collection = function( name ) {
  return db.collection( name );
}

module.exports = collection;
