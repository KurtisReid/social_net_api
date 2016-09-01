//Issues with program:
// concat not working

var express = require('express');
var app = express();
var fs = require("fs");
//var FB = require('fb');//Facebook sdk
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;//objectID object
var assert = require('assert');
var https = require("https");
var http = require("http");
var collect = "isThisReals";//This is the name of the collection in the database where the information will be stored

var input = fs.readFileSync('LFST.json', 'utf8');
var output = fs.readFileSync('test.json', 'utf8');
var url = 'mongodb://localhost:27017/LFST';//this is the URL specifiying the port to connect to the database
//var mongoCommands = require('getmongo.js');

var bodyParser = require('body-parser');
//var input = fs.readFileSync('LFST.json', 'utf8');
//var obj = JSON.parse(input);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var school_name = "Kent State University at Kent";
var API_KEY = require('./API_KEY').api_key;//acess api_key stored on another file
var query;


//var collect = "replicaset";

//MongoClient.connect("mongodb://localhost:27017/LFST", function(err, db) {
//console.log("assert.ok(db != null)");



var insertDocument = function(db, callback, insert) {
  var itemID;
console.log("InsertDocumet");

var ex_dat = '{"id":1,"cause":"finished coarse","distenceToLearningGoal":"19"}';
  //db.collection(collect).insertOne(insert, function(err, result) {
    //assert.equal(err, null);
    console.log("Inserted a document into the collection.");
    itemID = insert._id;
    //console.log(insert);
    console.log("itemID: " + itemID);
    //console.log("                                                        ");

    callback(itemID);
  //});
};












//Takes json document, finds part spific to school, returns parsed json that contains nescciary information
var find_school = function(school_name, input_doc) {
  var parsed_document;
  console.log("");
  console.log("findSchool");
  parsed_document = JSON.parse(input_doc);//parsing the json document

  var i = 0;//counter

  while (parsed_document.results[i]['school.name'] != school_name) {
    i++;
  }
  query = parsed_document.results[i];
  //console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
  console.log(query);

  var ex_dat = '{"id":1,"cause":"finished coarse","distenceToLearningGoal":"19"}';
  var postData = JSON.stringify(query);
  var id = "place holder";

  post_to_input(postData, id, input);
  post_to_input(JSON.parse(ex_dat), id, output);
/*
//for interfaceing with other api
  var options = {
    hostname: 'localhost',
    port: 8081,
    path: '/inputKnowledgeItemsPOST/578e7d6862980a188416fabf',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  var req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.')
    })
  });

  req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
    console.log(e);
  });
  */

  // write data to request body
  console.log(postData);
  //req.write(postData);
  //req.end();
};


//Gets school information
https.get('https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key='+API_KEY+'&school.name=kent+State&_zip=44240&_fields=school.name%2Cschool.tuition_revenue_per_fte,school.zip', (res) => {
  console.log(`Got response: ${res.statusCode}`);
  // consume response body
  res.on('data', (d) => {
      process.stdout.write(d);
      find_school("Kent State University at Kent", d);


    });

  res.resume();
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});


var post_to_input = function (data_to_be_posted, user_id, file_to_be_modified) {

  console.log(file_to_be_modified);
  var obj = file_to_be_modified;
  //var obj = JSON.parse(file_to_be_modified);//obj = LFST document
  var temp_arr = [data_to_be_posted];

  console.log("data_to_be_posted");
  console.log(obj.inputKnowledgeItems);
  obj.inputKnowledgeItems = obj.inputKnowledgeItems.concat(temp_arr);
  console.log(obj.inputKnowledgeItems);

  //obj.inputKnowledgeItems[obj.inputKnowledgeItems.length] = data_to_be_posted; // adds data_to_be_posted to the LFST
  //obj.inputKnowledgeItems.length += 1;

// writing to file
  fs.writeFile('test.json', JSON.stringify(obj), function (err) {
  if (err) return console.log(err);
  console.log('POST sucessfull');
  });
}
