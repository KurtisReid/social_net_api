//file that stores the hashtable that strores the learningStates

var HashTable = require('hashtable');// hashtable to orginize states
var value = { "inputKnowledgeItemsID": null, "learningStateID": null, "OutputKnowledgeItemsID": null };

module.exports =
{
  learning_states_hash_table : new HashTable(),
  make_new_hash_table : function (callback) {
    var ls_hash_table = new HashTable();
    ls_hash_table.put('init', value);
    callback(null, ls_hash_table);
  }
};//end of module.exports
