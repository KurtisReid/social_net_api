//This will process the user input, and insert it into the inputKnowledgeItems section of the new LFST
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var assert = require('assert');
var https = require("https");
var API_KEY = require('./API_KEY').api_key;//acess api_key stored on another file
//var http = require("http");


var Careers = ["computers", "Psychology"];//list of Careers

var modify_inputKnowledgeItems_prefs = function (loc_state, student_status, career_field, desired_degree_level, current_degree_level, tuition_cost_ceiling)
{

}

var find_in_state_colleges = function(state_desired)
{
  var url = "&school.state=" + state_desired + "&_fields=school.name%2Cschool.tuition_revenue_per_fte,school.zip,2013.academics.program_percentage.computer,2013.cost.attendance.academic_year";
  get_info_from_api(url);
}

var get_info_from_api = function (url)// sends GET request to server, expects valid information to be recived
{
  https.get('https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key='+API_KEY+url, (res) => {
    console.log(`Got response: ${res.statusCode}`);
    // consume response body
    res.on('data', (d) => {
        process.stdout.write(d);//writing data to screen
        //callback(d);//returning data to calling function


      });

    res.resume();
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });
}

find_in_state_colleges("OH");
