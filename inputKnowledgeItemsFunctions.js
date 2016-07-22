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
  find_in_state_colleges(loc_state, career_field, tuition_cost_ceiling, function (err, returned_json_file) {
    if (err) throw err;
    console.log("Colleges found");
    //console.log("///////////////////////////list//////////////////");
    console.log(returned_json_file);

   /*check_for_accrediation(returned_json_file, function (err, ret_json_file) {
     if (err) throw err;
      console.log("///////////////////////////list//////////////////");
      console.log("checked the accrediations");
      console.log("accreddited colleges");
      console.log(ret_json_file);
      console.log("///////////////////////////list//////////////////");
    });// checks for properly acredditted institutions, returns modified list of acreddited universities

*/

    //console.log("\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/");
  });// returns a list of institutions in the state


/*
  list = check_for_accrediation(list, function (returned_json_file) {
    console.log("checked the accrediations");
    console.log("accreddited colleges");
    console.log(returned_json_file);
  });// checks for properly acredditted institutions, returns modified list of acreddited universities

  list = check_tution(list, tuition_cost_ceiling, function (returned_json_file) {
    console.log("Colleges found in the budget");
    console.log(returned_json_file);
  });// checks institutions tuition cost against tuition_cost_ceiling, returns list of institutions under ceiling
*/
  console.log("///////////////////////////list//////////////////");
  console.log(list);
  console.log("\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/");

  //show_list_of_colleges(list);//returns list of colleges
}

var get_info_from_api = function (url, callback)// sends GET request to server, expects valid information to be recived
{
  console.log(url);
  var test_url = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=pw4kBNcwzH7JHiCt6zpKgg5JcFwCfOjfkeyp5AJe&school.name=kent+State&_zip=44240&_fields=school.name%2Cschool.tuition_revenue_per_fte,school.zip,2013.academics.program_percentage.computer,2013.cost.attendance.academic_year,school.accreditor,school.ownership';
  var data;
  https.get(test_url,function(res) {
      var body = '';
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {//signals end of call
        console.log("????????????????????????????????")

        console.log(body);


        check_for_accrediation(body, function (err, ret_json_file) {
          if (err) throw err;
           console.log("///////////////////////////list//////////////////");
           console.log("checked the accrediations");
           console.log("accreddited colleges");
           console.log(ret_json_file);
           console.log("///////////////////////////list//////////////////");
         });// checks for properly acredditted institutions, returns modified list of acreddited universities
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });


}

var check_for_accrediation = function (data, callback)
{
  //keyword for api call: school.accreditor
  //bad colleges
  //Accrediting Council for Independent Colleges and Schools

  //check ownership
  //"school.ownership"
  // 3 = for profit

  //parse json data
  var parsed_document;
  parsed_document = JSON.parse(data);//parsing the json document
  console.log("?????????????????????????? check_for_accrediation ??????????????????");
  console.log(data);


  var accredited_institutions = {schools: [

  ]};
  var count = 0;
console.log("????????????????????????????????")
  console.log(parsed_document.results);

  //check for bad accreditors
  for (var i = 0; i < parsed_document.results; i++)
  {
    if(parsed_document.results[i]['school.accreditor'] != "Accrediting Council for Independent Colleges and Schools")
    {
      //add institutions to new json structure
      accredited_institutions.schools.push(parsed_document.results[i]);


    }
  }

  //return json structure

  /*list = check_tution(accredited_institutions, tuition_cost_ceiling, function (returned_json_file) {
    console.log("Colleges found in the budget");
    console.log(returned_json_file);
  });// checks institutions tuition cost against tuition_cost_ceiling, returns list of institutions under ceiling
  //callback(accredited_institutions);*/

callback(null, accredited_institutions);


}



var find_in_state_colleges = function(state_desired, career_field, tuition_cost_ceiling, callback)
{

  var url = "&school.state=" + state_desired + "&_fields=school.name%2Cschool.tuition_revenue_per_fte,school.zip," + year + ".academics.program_percentage." + Careers[career_field]+ "," + year + ".cost.attendance.academic_year" + ",school.accreditor,school.ownership";
  var data;
  get_info_from_api(url, function (err, ret_data) {
    if (err) throw err;
    console.log(ret_data);
    data = ret_data;
  });
console.log("///////////////////////////////////////////////////////////")

  console.log(data);
console.log("///////////////////////////////////////////////////////////")
  callback(data);


}




var check_tution = function (list, tuition_cost_ceiling, callback)
{
  //// checks institutions tuition cost against tuition_cost_ceiling, returns list of institutions under ceiling
  //loop through list

      //check if tution is below ceiling
      // if (tution < tuition_cost_ceiling || tution = tuition_cost_ceiling) add to list

  //return mondified list
  callback(list);
}





modify_inputKnowledgeItems_prefs("OH", "full",0, "Bachelor", "HS", "20000");
