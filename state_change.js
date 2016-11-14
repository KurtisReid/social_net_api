//This will handle state transitions
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
bodyParser.json(); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var assert = require('assert');
var https = require("https");
var API_KEY = require('./API_KEY').api_key;//acess api_key stored on another file
var fs = require("fs");


var current_key = 0;//key of the last learning state
//var current_key = fs.readFileSync('cs_key', 'utf8');//key of the last learning state
var learning_states_hash_table = require('./learning_states_hashtable').learning_states_hash_table;
var get_ls_hash_table = require('./learning_states_hashtable').make_new_hash_table;
var set_ls_hash_table = require('./learning_states_hashtable');
var HashTable = require('hashmap');// hashtable to orginize states
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

//var learning_states_hash_table = new HashTable();// hash table in which the states will be stored in

module.exports = {

  print_whole_table : function() {
    //NOTE: working function
    //prints whole hash table
    console.log('print_whole_table');
    learning_states_hash_table.forEach(function (key, value) {
      console.log("Key: " + key);
      console.log(value);
      //console.log(input_hash_table.learningStateID);
    });//end of learning_states_hash_table.forEach

  },//end print_whole_table



  // call that starts the process of the functions on this page
  doc_call : function (reccomendation_obj, learning_states_hash_table, callback) {
    //var temp_hash_table;

  },//end doc_call

  /*
    Prerequisite: hashtable objects must have learningStateID
    - learning_states_hash_table must be a hashtable

  */


  add_new_state : function (new_state_transition, new_state_transition_key, current_state_key, learning_states_hash_table, callback) {
    //gets current state
    console.log("add_new_state");
    var ls_h_t = learning_states_hash_table;
      var current_state;

      if (learning_states_hash_table.get(current_state_key) == undefined)
      {
        console.log("current_state is undefined");
        get_ls_hash_table(function (err, learning_states_hash_table) {
            if (err) throw err;
            current_state = learning_states_hash_table.get(current_state_key);
            console.log("current_state: " + current_state);
        });//end get_ls_hash_table function call


      }
      else {
        current_state = learning_states_hash_table.get(current_state_key);
      }

      console.log("current_state: " + current_state);



    //have current state point to new state key


    try
    {
      current_state.learningStateID = new_state_transition_key;
    }
    catch (e)
    {
      console.log("learningStateID is not in passed hashtable object");
    }



    //put current state back into hashtable
    console.log("test");

    set_ls_hash_table.add_to_hash(current_state_key, current_state, function (err, hashtable) {
      console.log("test try sucessfull");
      callback(null, learning_states_hash_table);
    });
    console.log("test sucessfull");
    //returns learning_states_hash_table
    callback(null, learning_states_hash_table);

  },//end of add_new_state




  get_current_state_key : function (callback)
  {
    console.log("get_current_state_key");
    // gets last key from database (not yet implimented)
    if (current_key == 'null')
    {
      console.log("current_key is null");
      callback("current_key is null", "null");
    }
    callback(null, current_key);
  },

  get_new_key : function (callback) {
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

  },//end of get_new_key





  get_new_state_transition : function (data, callback) {
    console.log("get_new_state_transition(" + data + ")");

    var new_state_transition = {
      "inputKnowledgeItemsID": null,//inputKnowledgeItems
      "learningStateID": null,// points twoard the next learning state
      "OutputKnowledgeItemsID": null
    };

    var key;//new key
    key = randomstring.generate(7);

    /*

    get_new_key(function (err, new_key) {
      if (err) throw err;
      key = new_key;
      console.log("New key: " + new_key);

    });//end get_new_key
    */

    new_state_transition.inputKnowledgeItemsID = data.inputKnowledgeItemsID;
    new_state_transition.OutputKnowledgeItemsID = data.OutputKnowledgeItemsID;

  /*

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
  */
    //console.log()

    console.log("Key: " + key);
    console.log("derivedKnowledgeID: " + new_state_transition.inputKnowledgeItemsID);
    console.log("learningStateID: " + new_state_transition.learningStateID);
    console.log("OutputKnowledgeItemsID: " + new_state_transition.OutputKnowledgeItemsID);




    callback(null, key, new_state_transition);
  },//end get_new_state_transition



  get_derived_knowledge_ID : function (data, callback) {
    var id = "test";
    var cat = "cat_test";

    //get id and catagory information from data


    callback(null, id, cat);

  },//end of get_derived_knowledge_ID

  get_learning_state_ID : function (category, callback) {
    var id = "null"; //assumes that this learning state is the newest learning state


    //get id based on the category catagory information from data


    callback(null, id);


  },//end of get_learning_state_ID

  get_output_knowledge_item_ID : function (data, callback) {
    var temp_ID = "OUT_TEST";//test id


    callback(null, temp_ID);
  },//end of get_output_knowledge_item_ID




  //////////////////////////////////// test calls



  //print_whole_table();
};//end of moduule exports
