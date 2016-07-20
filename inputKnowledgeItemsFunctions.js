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


var Careers = ["computer", "Psychology"];//list of Careers
var year = "2013";

var modify_inputKnowledgeItems_prefs = function (loc_state, student_status, career_field, desired_degree_level, current_degree_level, tuition_cost_ceiling)
{
var list;
  list = find_in_state_colleges(loc_state, career_field);// returns a list of institutions in the state
  list = check_for_accrediation(list);// checks for properly acredditted institutions, returns modified list of acreddited universities
  list = check_tution(list, tuition_cost_ceiling);// checks institutions tuition cost against tuition_cost_ceiling, returns list of institutions under ceiling




}

var check_for_accrediation = function (data)
{
  //keyword for api call: school.accreditor
  //bad colleges
  //Accrediting Council for Independent Colleges and Schools

  //check ownership
  //"school.ownership"
  // 3 = for profit

  //parse json data


  //check for bad accreditors

  // write good institutions to new json structure


  // check tution costs



}



var find_in_state_colleges = function(state_desired, career_field)
{

  var url = "&school.state=" + state_desired + "&_fields=school.name%2Cschool.tuition_revenue_per_fte,school.zip," + year + ".academics.program_percentage." + Careers[career_field]+ "," + year + ".cost.attendance.academic_year" + ",school.accreditor,school.ownership";
  get_info_from_api(url);
}


//year + ".cost.attendance.academic_year__range=.." + tuition_cost_ceiling

var check_tution = function (list, tuition_cost_ceiling) {
  //// checks institutions tuition cost against tuition_cost_ceiling, returns list of institutions under ceiling
  //loop through list

      //check if tution is below ceiling
}



var get_info_from_api = function (url, callback)// sends GET request to server, expects valid information to be recived
{
  https.get('https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key='+API_KEY+url, (res) => {
    console.log(`Got response: ${res.statusCode}`);
    // consume response body
    res.on('data', (d) => {
        process.stdout.write(d);//writing data to screen
        callback(d);//returning data to calling function
        //check_for_accrediation(d);




      });

    res.resume();
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });
}

find_in_state_colleges("OH", 0);
