//takes professors name from proposed list of courses and sends them to rate my professor, which then returns the result

var rmp = require("rmp-api");//rate my professor api
var i = 0;//counter

var fs = require("fs");
var input = fs.readFileSync('CSDegree.json', 'utf8');//read class info from file
var class_list = JSON.parse(input);//parsed list of classes

var callback = function(professor) {
  i++;
  if (professor === null) {
    console.log("No professor found.");
    return;
  }
  console.log("Name: " + professor.fname + " " + professor.lname);
  console.log("University: "+ professor.university);
  console.log("Quality: " + professor.quality);
  console.log("Easiness: " + professor.easiness);
  console.log("Helpfulness: " + professor.help);
  console.log("Average Grade: " + professor.grade);
  console.log("Chili: " + professor.chili);
  console.log("URL: " + professor.url);
  console.log("First comment: " + professor.comments[0]);
  if (i < class_list.CoursesReq.length)//check for end of list
  {
    rmp.get(class_list.CoursesReq[i].Professor, callback);//recursivly iterate through list
  }

};

rmp.get(class_list.CoursesReq[i].Professor, callback);//cycle through and print out all professors
//rmp.get(class_list.CoursesReq[0].Professor, callback);
