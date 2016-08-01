//file that stores the hashtable that strores the learningStates

var HashTable = require('hashtable');// hashtable to orginize states
var value = { "inputKnowledgeItemsID": null, "learningStateID": null, "OutputKnowledgeItemsID": null };
var learning_states_hash_table = new HashTable();// hash table in which the states will be stored in
learning_states_hash_table.put('init', value);
module.exports = learning_states_hash_table;
