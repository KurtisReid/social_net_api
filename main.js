//driver file aka main.js

var HashTable = require('hashtable');// hashtable to orginize states
//include recomendation
var recomendation = require('./recomendation');
//include state_change.js
var state_change = require('./state_change.js');

var learning_s_hash = require('./learning_states_hashtable');



var outputID = "outKey";

var inputID = "inKey";

//create hashtable for OutputKnowledgeItems
var output_hash_table = new HashTable();// hash table in which the OutputKnowledgeItems will be stored in

//input data into hashtable
output_hash_table.put(outputID, "OutputKnowledgeItem 1");

//create hashtable for InputKnowledgeItems
var input_hash_table = new HashTable();// hash table in which the InputKnowledgeItems will be stored in

//input data into hashtable
input_hash_table.put(inputID, "inputKnowledgeItem 1");
//input_hash_table.put("try", "inputKnowledgeItem 2");


//get keys



var rec_obj;
recomendation.set_reccomendation_obj(outputID, inputID, function (err, rec_object){
  if (err) throw err;
  console.log("rec_object: " + rec_object);

  //create reccomendation
  recomendation.set_recc_as_learning_state(rec_object, function (err) {
    if (err) throw err;
    rec_obj = rec_object;




    console.log("////////////////////////////");
    learning_s_hash.read_from_file(function (err) {});

  });//end of set_recc_as_learning_state function call
});//end of set_reccomendation_obj function call




console.log("############################################### 2 ###############################");


//inserting second object
    recomendation.set_reccomendation_obj("hello", "hey", function (err, rec_object){
      console.log("recomendation.set_reccomendation_obj");
      if (err) throw err;
      console.log("rec_object: " + rec_object);

      //create reccomendation
      recomendation.set_recc_as_learning_state(rec_object, function (err) {
        console.log("recomendation.set_recc_as_learning_state");
        if (err) throw err;
        rec_obj = rec_object;
        console.log("/44444444444444444444444444///////////////////////////");
        //learning_s_hash.read_from_file(function (err) {});
        console.log("////////////////////////////");
        learning_s_hash.read_from_file(function (err) {});



      });//end of set_recc_as_learning_state function call
    });//end of set_reccomendation_obj function call






//console.log(rec_obj);
