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

var learning_states_hash_table = new HashTable();// hash table in which the states will be stored in


var print_whole_table = function () {
  //prints whole hash table
  var arr = learning_states_hash_table.keys();

  console.log('For loop');
  for(var i = 0; i < arr.length; i++)
  {
    console.log(arr[i]);
    console.log(learning_states_hash_table.get(arr[i]));
  }


}//end print_whole_table

var add_new_state = function (new_state_transition, new_state_transition_key, current_state_key, learning_states_hash_table, callback) {
  //gets current state
  var current_state = learning_states_hash_table.get(current_state_key);

  //have current state point to new state key
  current_state.learningStateID = new_state_transition_key;

  //put current state back into hashtable
  learning_states_hash_table.put(current_state_key, current_state);

  //returns learning_states_hash_table
  callback(null, learning_states_hash_table);

}//end of add_new_state






var get_new_state_transition = function (data, callback) {
  console.log("get_new_state_transition started");

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



  get_derived_knowledge_ID(data, function (err, id, category) {
    if (err) throw err;
    new_state_transition.derivedKnowledgeID = id;
    console.log("derivedKnowledgeID: " + id);


    get_learning_state_ID (category, function (err, lid) {
      if (err) throw err;
      new_state_transition.learningStateID = lid;
      console.log("learningStateID: " + lid);

      get_output_knowledge_item_ID (category, function (err, oid) {
        if (err) throw err;
        new_state_transition.OutputKnowledgeItemsID = oid;
        console.log("OutputKnowledgeItemsID: " + oid);





      });//end get_output_knowledge_item_ID
    });//end get_learning_state_ID
  });//end get_derived_knowledge_ID

  //console.log()

  console.log("Key: " + key);
  console.log("derivedKnowledgeID: " + new_state_transition.derivedKnowledgeID);
  console.log("learningStateID: " + new_state_transition.learningStateID);
  console.log("OutputKnowledgeItemsID: " + new_state_transition.OutputKnowledgeItemsID);




  callback(null, key, new_state_transition);
};//end get_new_state_transition

var get_new_key = function (callback) {
  console.log("get_new_key started");
  var key;
  var is_in = true;
  key = randomstring.generate(7);
  /*
  while (is_in = true)
  {
    console.log("while");
    //generate a ramdom string of numbers for the key
    key = randomstring.generate(7);
    console.log(key);

    is_in != learning_states_hash_table.has(key);


    //check if string is already used

/*
    if ( = false)
    {
      console.log(key + " is already in hashtable");
    }
    else
    {
      is_in = false;
    }

    //if string is already used, generates a new string
  }*/

  callback(null, key);

}//end of get_new_key

var get_derived_knowledge_ID = function (data, callback) {
  var id = "test";
  var cat = "cat_test";

  //get id and catagory information from data


  callback(null, id, cat);

}//end of get_derived_knowledge_ID

var get_learning_state_ID = function (category, callback) {
  var id = "LS_TEST";


  //get id based on the category catagory information from data


  callback(null, id);


}//end of get_learning_state_ID

var get_output_knowledge_item_ID = function (data, callback) {
  var temp_ID = "OUT_TEST";//test id


  callback(null, temp_ID);
};//end of get_output_knowledge_item_ID




//////////////////////////////////// test calls

get_new_state_transition("data", function (err, key, state_transition_obj) {
  if (err) throw err;
  learning_states_hash_table.put(key, state_transition_obj);//inserting into hashtable
  print_whole_table();


});//end get_new_state_transition call

//print_whole_table();
