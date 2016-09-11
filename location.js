//zip code
var API_KEY = require('./API_KEY').location_api_key;//api key for zip code api

var https = require("https");
var http = require("http");

var get_distence_by_zip = function(school, location, callback)
{
  var distence;
  //make api request

  https.get('https://www.zipcodeapi.com/rest/'+API_KEY+'/distance.json/'+location+'/'+school+'/mile', (res) => {
    console.log(`Got response: ${res.statusCode}`);
    // consume response body
    res.on('data', (d) => {
        process.stdout.write(d);

        // extract distence from json
        var parsed_document = JSON.parse(d);//parsing the json document
        distence = parsed_document['distance'];
        console.log(distence)
        callback(null, distence);


      });

    res.resume();
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });

  //return distence



}

get_distence_by_zip(44242, 44662, function(err, distence) {
  console.log(distence);
})
