//This will handle state transitions
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
bodyParser.json(); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var assert = require('assert');
var https = require("https");
var API_KEY = require('./API_KEY').api_key;//acess api_key stored on another file

var HashTable = require('hashtable');// hashtable to orginize states
var randomstring = require("randomstring");//generates random strings


/*
//State transition resulting from input changed

//State transition resulting course completion

//State transition resulting from recommendation acceptance

//State transition resulting from change in aggressiveness level

//
*/



//add state hashtable
/*
  TODO: (later) switch from hashtable to database
*/

var learning_states_hash_table = new HashTable();

//learning_states_hash_table.put('key', {value: 'value'});

//console.log(learning_states_hash_table.get('key'));








var get_new_state_transition = function (data, callback) {

  var new_state_transition = {
    "inputKnowledgeItemsID": null,//inputKnowledgeItems
    "learningStateID": null,// points twoard the next learning state
    "OutputKnowledgeItemsID": null
  };

  var key;//new key

  get_new_key(function (err, new_key) {
    if (err) throw err;
    key = new_key;
    console.log("New key: " + new_key);

  });//end get_new_key



  get_derived_knowledge_ID(data, function (err, id, catagory) {
    if (err) throw err;
    new_state_transition.derivedKnowledgeID = id;


    get_learning_state_ID (category, function (err, oid) {
      if (err) throw err;
      new_state_transition.learningStateID = oid;

      get_output_knowledge_item_ID (category, function (err, oid) {
        if (err) throw err;
        new_state_transition.learningStateID = oid;




      });//end get_output_knowledge_item_ID
    });//end get_learning_state_ID
  });//end get_derived_knowledge_ID


};//end get_new_state_transition

var get_new_key = function (callback) {
  var key;
  var is_in = true;
  while (is_in = true)
  {
    //generate a ramdom string of numbers for the key
    key = randomstring.generate(7);

    //is_in = learning_states_hash_table.has(key);


    //check if string is already used
    if (learning_states_hash_table.has(key))
    {
      console.log(key + " is already in hashtable");
    }
    else
    {
      is_in = false;
    }

    //if string is already used, generates a new string
  }

  callback(null, key);

}//end of get_new_key

var get_derived_knowledge_ID = function (data, callback) {
  var id;
  var cat;

  //get id and catagory information from data


  callback(null, id, cat);

}

var get_learning_state_ID = function (category, callback) {
  var id;


  //get id based on the category catagory information from data


  callback(null, id);


}

var get_output_knowledge_item_ID = function (data, callback) {
  var temp_ID = 0000;//test id


  callback(null, temp_ID);
}
