//This will handle state transitions
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var express = require('express');

var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var assert = require('assert');
var https = require("https");
var API_KEY = require('./API_KEY').api_key;//acess api_key stored on another file

var fs = require("fs");

var small_classes = fs.readFileSync('du.json', 'utf8');
var kent_classes = fs.readFileSync('cs.json', 'utf8');//imports list of classes at kent
var stark_classes = fs.readFileSync('cs(stark).json', 'utf8');//imports list of classes at stark
var required_classes = fs.readFileSync('cs(req).json', 'utf8');// imports list of required classes



//console.log(kent_classes[0]);
//var kcl = JSON.stringify(kent_classes);
console.log("he");
//var kco = JSON.parse(kent_classes);
var x = 0;
//obj.learningState[obj.learningState.length]

var funct = function (data, callback) {
  console.log("funct running");
  callback(null, data);
}


funct(small_classes, function (err, json) {
    //console.log(json.CourseInventory);
    console.log("hello from the callllbackkkkkkkkkkkkkkkkkkkk");
    var parsed_doc = JSON.parse(json);
    console.log(parsed_doc.Campus);
    console.log(parsed_doc.Courses[0]);



});
