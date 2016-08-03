//this file will handle the mongodb server
//NOTE: this is a dummy program until the mongodb is running

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var input = fs.readFileSync('LFST.json', 'utf8');
var obj = JSON.parse(input);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var ObjectID = require('mongodb').ObjectID;//objectID object

module.exports =
{
  add_new_file : function (new_file) {
    console.log("file added to database");
  },//end of add_new_file
  get_file : function (callback) {
    console.log("file returned");
    callback(null, obj);//returns LFST as a json object
  }
};//end of module.exports
