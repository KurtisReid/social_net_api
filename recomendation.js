// recommendation is selected

//include state_change
var helpers = require('./state_change');

var reccoemndation_obj = {
"OutputKnowledgeItemsID": null,
"inputKnowledgeItemsID": null
};



module.exports =
{

  //makes recommendation object by mapping OutputKnowledgeItemsID and inputKnowledgeItemsID
  var set_reccomendation_obj = function (outputID, inputID, callback)
  {
    var rec_obj = {
    "OutputKnowledgeItemsID": null,
    "inputKnowledgeItemsID": null
    };
    rec_obj.OutputKnowledgeItemsID = outputID;
    rec_obj.inputKnowledgeItemsID = inputID;

    callback(null, rec_obj);//returns rec_obj
  };//end of set_reccomendation_obj

  doc_call = function (reccomendation_obj, learning_states_hash_table, callback,)



  //calls doc_call from state_change.js

};//end of module.exports
