//This will handle state transitions
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var assert = require('assert');
var https = require("https");
var API_KEY = require('./API_KEY').api_key;//acess api_key stored on another file



//State transition resulting from input changed


//State transition resulting course completion

//State transition resulting from recommendation acceptance

//State transition resulting from change in aggressiveness level

//

var new_state_transition = {
  "derivedKnowledgeID": null,//inputKnowledgeItems
  "learningStateID": null
};

var set_new_state_transition = function (data, callback) {

  get_derived_knowledge_ID(data, function (err, id, catagory) {
    if (err) throw err;

    get_learning_state_ID ()
  });
};

var get_derived_knowledge_ID = function (data, callback) {
  var id;
  var cat;

  //get id and catagory information from data
  

  callback(null, id, cat);

}

var get_learning_state_ID = function (data, callback) {

}
