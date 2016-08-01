// recommendation is selected

//include state_change
var state_change = require('./state_change');
var learning_states_hash_table = require('./learning_states_hashtable').learning_states_hash_table;
var current_key = require('./current_key').last_key;//key of the last learning state

var reccoemndation_obj = {
"OutputKnowledgeItemsID": null,
"inputKnowledgeItemsID": null
};



module.exports =
{

  //makes recommendation object by mapping OutputKnowledgeItemsID and inputKnowledgeItemsID
  set_reccomendation_obj : function (outputID, inputID, callback)
  {
    var rec_obj = {
    "OutputKnowledgeItemsID": null,
    "inputKnowledgeItemsID": null
    };
    rec_obj.OutputKnowledgeItemsID = outputID;
    rec_obj.inputKnowledgeItemsID = inputID;

    callback(null, rec_obj);//returns rec_obj
  },//end of set_reccomendation_obj

  set_recc_as_learning_state : function (reccomendation_obj, callback)
  {
    console.log("set_recc_as_learning_state");

    state_change.get_new_state_transition("data", function (err, key, state_transition_obj) {
      if (err) throw err;
      //learning_states_hash_table.put(key, state_transition_obj);//inserting into hashtable

      state_change.get_current_state_key(function (err, current_state_key) {

        state_change.add_new_state(state_transition_obj, key, current_state_key, learning_states_hash_table, function (err, ls_hash_table)
        {
          //temp_hash_table = learning_states_hash_table;
          if (err) throw err;

          console.log("current_key: " + current_key);
          //setting a the new key as the last key
          current_key.current_key = key;

          console.log("current_key: " + current_key);
          state_change.print_whole_table();

          learning_states_hash_table.learning_states_hashtable = ls_hash_table;
          //callback(null, learning_states_hash_table);
        })//end add_new_state function call

      })//end get_current_state_key function call




    })//end get_new_state_transition call

    /*state_change.doc_call(reccomendation_obj, learning_states_hash_table, function (err, ls_hash_table)
    {
      if (err) throw err;
      learning_states_hash_table.learning_states_hashtable.learning_states_hash_table = ls_hash_table;//write new hashtable to file


    });//end of doc_call function call
    */

    callback(null);

  }//end of set_recc_as_learning_state





  //calls doc_call from state_change.js

};//end of module.exports
