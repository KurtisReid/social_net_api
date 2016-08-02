//file that stores the hashtable that strores the learningStates
/*



NOTE: due to .put not working, hashmap is always empty









*/

var HashTable = require('hashtable');// hashtable to orginize states
var fs = require("fs");
var value = { "inputKnowledgeItemsID": null, "learningStateID": null, "OutputKnowledgeItemsID": null };
var learning_states_hash_table = new HashTable();
module.exports =
{
  learning_states_hash_table,

  make_new_hash_table : function (callback) {
    console.log("learning_states_hashtable.js, make_new_hash_table");
    var ls_hash_table = new HashTable();
    ls_hash_table.put('init', value);
    callback(null, ls_hash_table);
  },//end of make_new_hash_table

  set_learning_states_hash_table : function(key, value) {
    console.log("set_learning_states_hash_table");
    learning_states_hashtable.put(key, value);
  },//end of set_learning_states_hash_table

  read_from_file : function (callback) {
    console.log("read_from_file");
    fs.readFile('ls_hash_tables', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }


      //var arr = data.keys();

      learning_states_hash_table.forEach(function () {
        console.log("trying for each");
        console.log(learning_states_hash_table.learningStateID);
      });

      console.log("data: " + data);
    });//end of readFile
    callback(null);
  },//end of read_from_file
  set_hash_table_from_file : function () {

  },

  write_to_file : function(ls_hash_table) {
    // writing to file

    console.log("learning_states_hashtable.js, write_to_file");
    fs.writeFile('ls_hash_tables', ls_hash_table.toString(), function (err) {
      if (err) return console.log(err);
      console.log('POST to ls_hash_table.json sucessfull');


      });
    },//end of write_to_file
    add_to_hash : function (key, data, callback) {
      console.log("learning_states_hashtable.js, add_to_hash");
      console.log("Key: " + key);
      console.log("Value: " + data);
      console.log(learning_states_hash_table);
      console.log("learning_states_hash_table.put(key, data);")
      //learning_states_hash_table.put(key, data);
      callback(null, learning_states_hash_table);
    },//end of add_to_hash
    iterate_and_write : function () {
      var arr = learning_states_hash_table.keys();
      console.log(arr);

      console.log('iterate_and_write');
      for(var i = 0; i < arr.length; i++)
      {
        console.log(arr[i]);
        console.log(learning_states_hash_table.get(arr[i]));
      }

    }
};//end of module.exports
