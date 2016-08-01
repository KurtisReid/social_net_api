//driver file aka main.js

var HashTable = require('hashtable');// hashtable to orginize states
//include recomendation
var helpers = require('./recomendation');
//include state_change.js
var helpers = require('./state_change.js');




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

//get keys




var rec_obj = set_reccomendation_obj(outputID, inputID, function (err, rec_obj){
  if (err) throw err;

  //create reccomendation
  set_recc_as_learning_state(rec_obj, function (err) {
    if (err) throw err;
  });//end of set_recc_as_learning_state function call
});//end of set_reccomendation_obj function call

console.log("////////////////////////////");
console.log(rec_obj);
