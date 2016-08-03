//responsible for parsing and adding data to LFST
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var input = fs.readFileSync('LFST.json', 'utf8');
//var obj = JSON.parse(input);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

module.exports =
{

  insert_into_OutputKnowledgeItems : function (item)
  {
    var obj;
    var parsed_document;
    var str_doc;

    str_doc = JSON.stringify(doc);
    obj = JSON.parse(str_doc);
        obj.OutputKnowledgeItems[obj.OutputKnowledgeItems.length] = item;//adds example to json file, the JSON.parse converts string to json object
  },//end of insert_into_OutputKnowledgeItems
  insert_into_inputKnowledgeItems : function (item)
  {
    var obj;
    var parsed_document;
    var str_doc;

    str_doc = JSON.stringify(doc);
    obj = JSON.parse(str_doc);
        obj.inputKnowledgeItems[obj.inputKnowledgeItems.length] = item;//adds example to json file, the JSON.parse converts string to json object
  },//end of insert_into_inputKnowledgeItems
  insert_into_learningState: function (item)
  {
    var obj;
    var parsed_document;
    var str_doc;

    str_doc = JSON.stringify(doc);
    obj = JSON.parse(str_doc);
        obj.learningState[obj.learningState.length] = item;//adds example to json file, the JSON.parse converts string to json object
  },//end of insert_into_learningState\\
  insert_into_stateTransition: function (item)
  {
    var obj;
    var parsed_document;
    var str_doc;

    str_doc = JSON.stringify(doc);
    obj = JSON.parse(str_doc);
        obj.stateTransition[obj.stateTransition.length] = item;//adds example to json file, the JSON.parse converts string to json object
  },//end of insert_into_stateTransition\
  insert_into_outputReccomendations: function (item)
  {
    var obj;
    var parsed_document;
    var str_doc;

    str_doc = JSON.stringify(doc);
    obj = JSON.parse(str_doc);
        obj.outputReccomendations[obj.outputReccomendations.length] = item;//adds example to json file, the JSON.parse converts string to json object
  },//end of insert_into_outputReccomendations\


};//end of module.exports
