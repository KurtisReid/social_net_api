var express = require('express');
var app = express();
var fs = require("fs");
var FB = require('fb');//Facebook sdk
//var MongoClient = require('mongodb').MongoClient;
//var ObjectID = require('mongodb').ObjectID;//objectID object
var assert = require('assert');

//var collect = "isThisReal";//This is the name of the collection in the database where the information will be stored

//var url = 'mongodb://localhost:27017/LFST';//this is the URL specifiying the port to connect to the database
//var mongoCommands = require('getmongo.js');

var bodyParser = require('body-parser');
//var input = fs.readFileSync('LFST.json', 'utf8');
//var obj = JSON.parse(input);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

FB.api('/893535150657056','GET',{"fields":"id,name,education,location,friends{name,education}"},
  function(response) {
    console.log(JSON.stringify(response));
    fs.writeFile('test.json', JSON.stringify(response), function (err) {
    if (err) return console.log(err);

    });
  }
);

//fs.writeFile('test.json', JSON.stringify(obj), function (err) {
//if (err) return console.log(err);
//  console.log('Delete sucessfull');
//});


/*

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  if (err) {
  console.log('Unable to connect to the mongoDB server. Error:', err);
}


//try {
//  db.open(function(err, client){//opens database

  //  throw err;


//console.log("STARTED JKJKJKJKJKJKJKJKJKJKJKJKJKJKJKJKJKJKJKJK:")




    var insertDocument = function(db, callback, insert) {
      var itemID;

      db.collection(collect).insertOne(insert, function(err, result) {
        //assert.equal(err, null);
        console.log("Inserted a document into the collection.");
        itemID = insert._id;
        //console.log(insert);
        console.log("itemID: " + itemID);
        //console.log("                                                        ");

        callback(itemID);
      });
    };

    var findLFST = function(db, callback) {
      var return_doc;
      var cursor =db.collection(collect).find( );
      cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
          //console.log("hi");
          console.dir(doc);
          console.log("||||||||||||||||||||||||||");

          return_doc += doc;



          //return doc;
        } else {
          //return doc;

          //console.log(return_doc);

          callback();

        }
      });
      return return_doc;
    };



    var removeRestaurants = function(db, callback) {
      db.collection(collect).deleteMany(
        { "borough": "Manhattan" },
        function(err, results) {
          console.log(results);
          callback();
        }
      );
    };




  //GETS

  app.get('/LFSTGET', function (req, res) {


  var cursor =db.collection(collect).find();
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      //console.log("hi");
      console.dir(doc);
      //console.log("||||||||||||||||||||||||||");
      //console.log(doc);
      res.end(JSON.stringify(doc));



    } else {
      //return doc;

      //db.close();
      res.end(JSON.stringify(doc));

    }


    //docum = findLFST(db, function() {

    //db.close();
    //});

    //console.log("JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJIIIIIIIIIIIIIIIIIII");
    //console.log(docum);


    //res.end(JSON.stringify(docum));
  });
});







app.get('/GETById/:id', function (req, res) {
  //gets LFST document by id
  //57755027cb8370bc17387485
  //57754880dfc57c4006b523cf
  //57757132a4c101ac1a883b35
  var id = new ObjectID(req.params.id);
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35");
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      //console.log("hi");
      console.dir(doc);
      //console.log("||||||||||||||||||||||||||");
      //console.log(doc);
      res.end(JSON.stringify(doc));



    } else {
      //return doc;

      //db.close();
      res.end(JSON.stringify(doc));

    }

  });
});

app.get('/GETOKSById/:id', function (req, res) {
  //GETS spific parts
  var id = new ObjectID(req.params.id);
  var parsed_document;
  var str_doc;
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35"); //test
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      //console.log("hi");
      console.dir(doc);
      //console.log("||||||||||||||||||||||||||");
      //console.log(doc);
      str_doc = JSON.stringify(doc);
      parsed_document = JSON.parse(str_doc);
      //console.log(parsed_document.inputKnowledgeItems);
      //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
      res.end(JSON.stringify(parsed_document.inputKnowledgeItems));
    } else {

      //return doc;
      //db.close();
      res.end(JSON.stringify(doc));

    }

  });
  //res.end(parsed_document.inputKnowledgeItems);
});

app.get('/inputKnowledgeItemsGET/:id', function (req, res) {

  var id = new ObjectID(req.params.id);
  var parsed_document;
  var str_doc;
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35"); //test
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      //console.log("hi");
      console.dir(doc);
      //console.log("||||||||||||||||||||||||||");
      //console.log(doc);
      str_doc = JSON.stringify(doc);
      parsed_document = JSON.parse(str_doc);
      //console.log(parsed_document.inputKnowledgeItems);
      //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
      res.end(JSON.stringify(parsed_document.inputKnowledgeItems));
    } else {

      //return doc;
      //db.close();
      res.end(JSON.stringify(doc));

    }

  });

  //old
  //console.log(JSON.stringify(obj.inputKnowledgeItems));
  //res.end(JSON.stringify(obj.inputKnowledgeItems));
})

app.get('/OutputKnowledgeItemsGET/:id', function (req, res) {

  var id = new ObjectID(req.params.id);
  var parsed_document;
  var str_doc;
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35"); //test
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      //console.log("hi");
      console.dir(doc);
      //console.log("||||||||||||||||||||||||||");
      //console.log(doc);
      str_doc = JSON.stringify(doc);
      parsed_document = JSON.parse(str_doc);
      //console.log(parsed_document.inputKnowledgeItems);
      //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
      res.end(JSON.stringify(parsed_document.OutputKnowledgeItems));
    } else {

      //return doc;
      //db.close();
      res.end(JSON.stringify(doc));

    }

  });

  //console.log(JSON.stringify(obj.OutputKnowledgeItems));
  //res.end(JSON.stringify(obj.OutputKnowledgeItems));
})

app.get('/learningStateGET/:id', function (req, res) {

  var id = new ObjectID(req.params.id);
  var parsed_document;
  var str_doc;
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35"); //test
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      //console.log("hi");
      console.dir(doc);
      //console.log("||||||||||||||||||||||||||");
      //console.log(doc);
      str_doc = JSON.stringify(doc);
      parsed_document = JSON.parse(str_doc);
      //console.log(parsed_document.inputKnowledgeItems);
      //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
      res.end(JSON.stringify(parsed_document.learningState));
    } else {

      //return doc;
      //db.close();
      res.end(JSON.stringify(doc));

    }

  });

  //console.log(JSON.stringify(obj.learningState));
  //res.end(JSON.stringify(obj.learningState));
})

app.get('/stateTransitionGET/:id', function (req, res) {

  var id = new ObjectID(req.params.id);
  var parsed_document;
  var str_doc;
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35"); //test
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      //console.log("hi");
      console.dir(doc);
      //console.log("||||||||||||||||||||||||||");
      //console.log(doc);
      str_doc = JSON.stringify(doc);
      parsed_document = JSON.parse(str_doc);
      //console.log(parsed_document.inputKnowledgeItems);
      //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
      res.end(JSON.stringify(parsed_document.stateTransition));
    } else {

      //return doc;
      //db.close();
      res.end(JSON.stringify(doc));

    }

  });
  //console.log(JSON.stringify(obj.stateTransition));
  //res.end(JSON.stringify(obj.stateTransition));
})

app.get('/outputReccomendationsGET/:id', function (req, res) {

  var id = new ObjectID(req.params.id);
  var parsed_document;
  var str_doc;
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35"); //test
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      //console.log("hi");
      console.dir(doc);
      //console.log("||||||||||||||||||||||||||");
      //console.log(doc);
      str_doc = JSON.stringify(doc);
      parsed_document = JSON.parse(str_doc);
      //console.log(parsed_document.inputKnowledgeItems);
      //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
      res.end(JSON.stringify(parsed_document.outputReccomendations));
    } else {

      //return doc;
      //db.close();
      res.end(JSON.stringify(doc));

    }

  });
  //console.log(JSON.stringify(obj.outputReccomendations));
  //res.end(JSON.stringify(obj.outputReccomendations));

})












// inserts new LFST file into
app.post('/newLFST/', function (req, res) {
  var item = req.body;
  //var itemID;
  console.log("Post outputKnowledgeItems");

  var itemID;

  db.collection(collect).insertOne(item, function(err, result) {
    //assert.equal(err, null);
    console.log("Inserted a document into the collection.");
    itemID = item._id;
    //console.log(insert);
    console.log("itemID: " + itemID);
    res.end(itemID.toString());//sends user the id of the document
  });


  //console.log("itemID: " + itemID);
//console.log("ttttttitemID: " + itemID);
  //res.end(itemID);
});













// POST method route
app.post('/inputKnowledgeItemsPOST/:id', function (req, res) {
  var item = req.body;
  var obj;
  console.log("Post inputKnowledgeItems");
  //var facebookapi = '{"AccountType": "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR","apikey": "34556357", "id" : "7"}';//information to be added
  console.log(item);

  var id = new ObjectID(req.params.id);
  var parsed_document;
  //var str_doc;
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35"); //test
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      //console.log("hi");
      console.dir(doc);
      //console.log("||||||||||||||||||||||||||");
      //console.log(doc);
      str_doc = JSON.stringify(doc);
      obj = JSON.parse(str_doc);
      //console.log(parsed_document.inputKnowledgeItems);
      //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
      //res.end(JSON.stringify(parsed_document.inputKnowledgeItems));


      console.log(item);
      obj.inputKnowledgeItems[obj.inputKnowledgeItems.length] = item;//adds example to json file, the JSON.parse converts string to json object
      console.log(JSON.stringify(obj));

      insertDocument(db, function() {
        db.close();
      }, obj);

    res.end(JSON.stringify(obj));
  } else {

    //return doc;
    //db.close();
    //res.end(JSON.stringify(doc));

  }

});
//res.end("Post inputKnowledgeItems");
});

app.post('/outputKnowledgeItemsPOST/:id', function (req, res) {
  var item = req.body;
  console.log("Post outputKnowledgeItems");

  //var obj = JSON.parse(input);//converts json to javascript object
  //var facebookapi = '{"Hello": "Wherever","you": "are", "id" : "4444444444"}';//information to be added

  var obj;
  var id = new ObjectID(req.params.id);
  var parsed_document;
  //var str_doc;
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35"); //test
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      //console.log("hi");
      console.dir(doc);
      //console.log("||||||||||||||||||||||||||");
      //console.log(doc);
      str_doc = JSON.stringify(doc);
      obj = JSON.parse(str_doc);
      //console.log(parsed_document.inputKnowledgeItems);
      //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
      //res.end(JSON.stringify(parsed_document.inputKnowledgeItems));


      console.log(item);
      obj.OutputKnowledgeItems[obj.OutputKnowledgeItems.length] = item;//adds example to json file, the JSON.parse converts string to json object
      console.log(JSON.stringify(obj));

      insertDocument(db, function() {
        db.close();
      }, obj);

    res.end(JSON.stringify(obj));
  } else {

    //return doc;
    //db.close();
    //res.end(JSON.stringify(doc));

  }

});


//res.end("Post inputKnowledgeItems");
});

app.post('/learningStatePOST/:id', function (req, res) {
  var item = req.body;
  console.log("Post learningState");
  //var facebookapi = '{"AccountType": "snapchat","apikey": "q234", "id" : "5"}';//information to be added
  console.log(item);

  var obj;
  var id = new ObjectID(req.params.id);
  var parsed_document;
  //var str_doc;
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35"); //test
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      //console.log("hi");
      console.dir(doc);
      //console.log("||||||||||||||||||||||||||");
      //console.log(doc);
      str_doc = JSON.stringify(doc);
      obj = JSON.parse(str_doc);
      //console.log(parsed_document.inputKnowledgeItems);
      //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
      //res.end(JSON.stringify(parsed_document.inputKnowledgeItems));


      console.log(item);
      obj.learningState[obj.learningState.length] = item;//adds example to json file, the JSON.parse converts string to json object
      console.log(JSON.stringify(obj));

      insertDocument(db, function() {
        db.close();
      }, obj);

    res.end(JSON.stringify(obj));
  } else {

    //return doc;
    //db.close();
    //res.end(JSON.stringify(doc));

  }

});
});

app.post('/stateTransitionPOST/:id', function (req, res) {
  var item = req.body;
  console.log("Post stateTransition");
  //var facebookapi = '{"AccountType": "snapchat","apikey": "q234", "id" : "5"}';//information to be added
  console.log(item);

  var obj;
  var id = new ObjectID(req.params.id);
  var parsed_document;
  //var str_doc;
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35"); //test
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      //console.log("hi");
      console.dir(doc);
      //console.log("||||||||||||||||||||||||||");
      //console.log(doc);
      str_doc = JSON.stringify(doc);
      obj = JSON.parse(str_doc);
      //console.log(parsed_document.inputKnowledgeItems);
      //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
      //res.end(JSON.stringify(parsed_document.inputKnowledgeItems));


      console.log(item);
      obj.stateTransition[obj.stateTransition.length] = item;//adds example to json file, the JSON.parse converts string to json object
      console.log(JSON.stringify(obj));

      insertDocument(db, function() {
        db.close();
      }, obj);

    res.end(JSON.stringify(obj));
  } else {

    //return doc;
    //db.close();
    //res.end(JSON.stringify(doc));

  }

});

});

app.post('/outputReccomendationsPOST/:id', function (req, res) {
  var item = req.body;
  console.log("Post outputReccomendations");
  //var obj = JSON.parse(input);//converts json to javascript object
  //var facebookapi = '{"AccountType": "snapchat","apikey": "q234", "id" : "5"}';//information to be added
  console.log(item);

  var obj;
  var id = new ObjectID(req.params.id);
  var parsed_document;
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      console.dir(doc);
      str_doc = JSON.stringify(doc);
      obj = JSON.parse(str_doc);



      console.log(item);
      obj.outputReccomendations[obj.outputReccomendations.length] = item;//adds example to json file, the JSON.parse converts string to json object
      console.log(JSON.stringify(obj));

      insertDocument(db, function() {
        db.close();
      }, obj);

      res.end(JSON.stringify(obj));
    } else {

      //return doc;
      //db.close();
      //res.end(JSON.stringify(doc));

    }

  });  //res.end("Post inputKnowledgeItems");
});


//deletes

//OutputKnowledgeItems
app.delete('/outputKSDELETE/:id/:oid', function(req, res) {
  //console.log(obj);
  //console.log("|||||||||||||||||||||||||||||||||||||||||||||||||");

  var obj;
  //var input = fs.readFileSync('LFST.json', 'utf8');
  //var obj = JSON.parse(input);
  var id = new ObjectID(req.params.id);
  var parsed_document;
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      console.dir(doc);
      str_doc = JSON.stringify(doc);
      obj = JSON.parse(str_doc);



      if(obj.OutputKnowledgeItems.length <= req.params.oid) {
        res.statusCode = 404;
        return res.send('Error 404: item not found');
      }
      obj.OutputKnowledgeItems.splice(req.params.oid, 1);
      res.json(true);
      console.log(obj);

      insertDocument(db, function() {
        //db.close();
      }, obj);
      console.log("DELETE                                  ");
      console.log(obj);
      res.end(JSON.stringify(obj));
    } else {

      //return doc;
      //db.close();
      //res.end(JSON.stringify(doc));

    }

  });




  //fs.writeFile('test.json', JSON.stringify(obj), function (err) {
  //if (err) return console.log(err);
  //  console.log('Delete sucessfull');
  //});

});



//inputKnowledgeItems
app.delete('/inputKSDELETE/:id/:oid', function(req, res) {
  //console.log(obj);
  //console.log("|||||||||||||||||||||||||||||||||||||||||||||||||");

  var obj;
  //var input = fs.readFileSync('LFST.json', 'utf8');
  //var obj = JSON.parse(input);
  var id = new ObjectID(req.params.id);
  var parsed_document;
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      console.dir(doc);
      str_doc = JSON.stringify(doc);
      obj = JSON.parse(str_doc);



      if(obj.inputKnowledgeItems.length <= req.params.oid) {
        res.statusCode = 404;
        return res.send('Error 404: item not found');
      }
      obj.inputKnowledgeItems.splice(req.params.oid, 1);
      res.json(true);
      console.log(obj);

      insertDocument(db, function() {
        //db.close();
      }, obj);
      console.log("DELETE                                  ");
      console.log(obj);
      res.end(JSON.stringify(obj));
    } else {

      //return doc;
      //db.close();
      //res.end(JSON.stringify(doc));

    }

  });

});


//delete outputReccomendations
app.delete('/outputReccomendationsDELETE/:id/:oid', function(req, res) {
  var obj;
  //var input = fs.readFileSync('LFST.json', 'utf8');
  //var obj = JSON.parse(input);
  var id = new ObjectID(req.params.id);
  var parsed_document;
  var cursor =db.collection(collect).find( { _id: id } );
  cursor.each(function(err, doc) {
    assert.equal(err, null);
    if (doc != null) {
      console.dir(doc);
      str_doc = JSON.stringify(doc);
      obj = JSON.parse(str_doc);



      if(obj.outputReccomendations.length <= req.params.oid) {
        res.statusCode = 404;
        return res.send('Error 404: item not found');
      }
      obj.outputReccomendations.splice(req.params.oid, 1);
      res.json(true);
      console.log(obj);

      insertDocument(db, function() {
        //db.close();
      }, obj);
      console.log("DELETE                                  ");
      console.log(obj);
      res.end(JSON.stringify(obj));
    } else {

      //return doc;
      //db.close();
      //res.end(JSON.stringify(doc));

    }

  });

});

//listener
var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port)

});

//});
//}
//catch (err)
//{
  //console.log('catch block');
  //console.log(err);
  //console.log('END CATCH');
//}
});
*/
