var express = require( 'express' );
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
// MongoDB用ファイルを指定
var collection = require( '../mongo' );
var COL = 'todo';

// root
router.get("/", function(req, res, next){
    res.render("index", {title: "title"});
});

// For Cross Origin
router.all( '/*', function ( req, res, next ) {
  res.contentType( 'json' );
  res.header( 'Access-Control-Allow-Origin', '*' );
  next();
} );

// GET todos
router.get( '/todos', function ( req, res ) {
  collection(COL).find().toArray(function(err, docs){
    res.send(docs);
  })
} );

// POST insert todo
router.post( '/todos', function ( req, res ) {
  req.body.completed = false;
  collection(COL).insertOne( req.body ).then(function(r) {
    res.send( r );
  });
} );

// PUT update todo
router.put( '/todos/:id', function ( req, res ) {
  if(req.body.completed === "true") {
    req.body.completed = true;
  } else {
    req.body.completed = false;
  }
  collection(COL).findOneAndUpdate( { _id: new ObjectID( req.params.id ) }, req.body, {}, function(err, r){
    res.send( r );
  } );
} );

// DELETE delete todo
router.delete( '/todos/:id', function ( req, res ) {
  collection(COL).findOneAndDelete( { _id: new ObjectID( req.params.id ) }, {}, function(err, r){
    res.send( r );
  } );
} );

module.exports = router;
