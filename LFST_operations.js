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

  insert_into_OutputKnowledgeItems : function (item) {
    var obj;
    var parsed_document;
    var str_doc;

    str_doc = JSON.stringify(doc);
    obj = JSON.parse(str_doc);
    obj.OutputKnowledgeItems[obj.OutputKnowledgeItems.length] = item;//adds example to json file, the JSON.parse converts string to json object
    console.log("inserted into OutputKnowledgeItems");
  },//end of insert_into_OutputKnowledgeItems
  insert_into_inputKnowledgeItems : function (item) {
    var obj;
    var parsed_document;
    var str_doc;

    str_doc = JSON.stringify(doc);
    obj = JSON.parse(str_doc);
    obj.inputKnowledgeItems[obj.inputKnowledgeItems.length] = item;//adds example to json file, the JSON.parse converts string to json object
    console.log("inserted into inputKnowledgeItems");
  },//end of insert_into_inputKnowledgeItems
  insert_into_learningState: function (item) {
    var obj;
    var parsed_document;
    var str_doc;

    str_doc = JSON.stringify(doc);
    obj = JSON.parse(str_doc);
    obj.learningState[obj.learningState.length] = item;//adds example to json file, the JSON.parse converts string to json object
    console.log("inserted into learningState");
  },//end of insert_into_learningState\\
  insert_into_stateTransition: function (item) {
    var obj;
    var parsed_document;
    var str_doc;

    str_doc = JSON.stringify(doc);
    obj = JSON.parse(str_doc);
    obj.stateTransition[obj.stateTransition.length] = item;//adds example to json file, the JSON.parse converts string to json object
    console.log("inserted into stateTransition");
  },//end of insert_into_stateTransition\
  insert_into_outputReccomendations: function (item) {
    var obj;
    var parsed_document;
    var str_doc;

    str_doc = JSON.stringify(doc);
    obj = JSON.parse(str_doc);
    obj.outputReccomendations[obj.outputReccomendations.length] = item;//adds example to json file, the JSON.parse converts string to json object
    console.log("inserted into outputReccomendations");
  },//end of insert_into_outputReccomendations

//geters
  get_OutputKnowledgeItems : function (callback) {
    var parsed_document;
    var str_doc;
    str_doc = JSON.stringify(doc);
    parsed_document = JSON.parse(str_doc);
    callback(null, parsed_document.OutputKnowledgeItems);//returns OutputKnowledgeItems
  },//end of get_OutputKnowledgeItems
  get_inputKnowledgeItems : function (callback) {
    var parsed_document;
    var str_doc;
    str_doc = JSON.stringify(doc);
    parsed_document = JSON.parse(str_doc);
    callback(null, parsed_document.inputKnowledgeItems);//returns inputKnowledgeItems
  },//end of get_inputKnowledgeItems
  get_learningState : function (callback) {
    var parsed_document;
    var str_doc;
    str_doc = JSON.stringify(doc);
    parsed_document = JSON.parse(str_doc);
    callback(null, parsed_document.learningState);//returns learningState
  },//end of get_learningState
  get_stateTransition : function (callback) {
    var parsed_document;
    var str_doc;
    str_doc = JSON.stringify(doc);
    parsed_document = JSON.parse(str_doc);
    callback(null, parsed_document.stateTransition);//returns stateTransition
  },//end of get_stateTransition
  get_outputReccomendations : function (callback) {
    var parsed_document;
    var str_doc;
    str_doc = JSON.stringify(doc);
    parsed_document = JSON.parse(str_doc);
    callback(null, parsed_document.outputReccomendations);//returns outputReccomendations
  },//end of get_outputReccomendations

  write_to_LFST : function (section, data) {
    //section = outputReccomendations, or inputKnowledgeItems, or etc.
    //data = data to be Inserted
    fs.writeFile('test.json', JSON.stringify(obj), function (err) {
    if (err) return console.log(err);
    console.log('writing to LFST sucessfull');
    });

  }

};//end of module.exports
