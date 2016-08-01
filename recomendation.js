// recommendation is selected

//include state_change
var helpers = require('./state_change');
var learning_states_hash_table = require('./learning_states_hashtable').learning_states_hash_table;

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

    doc_call(reccomendation_obj, learning_states_hash_table, function (err, ls_hash_table)
    {
      if (err) throw err;
      learning_states_hash_table.learning_states_hashtable.learning_states_hash_table = ls_hash_table;//write new hashtable to file


    });//end of doc_call function call

    callback(null);

  }//end of set_recc_as_learning_state





  //calls doc_call from state_change.js

};//end of module.exports
