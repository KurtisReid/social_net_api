
//reads mock file

// checks if requirments are met for each class
// if requirments are met, or CoursesReq = null, then add to learningState
// if requirments are not met, then it adds it to the list of todos/steps
var fs = require("fs");
var input = fs.readFileSync('CSDegree.json', 'utf8');
var obj = JSON.parse(input);

var mock_progress = JSON.parse(fs.readFileSync('classesTaken.json', 'utf8'));//mock of courses already taken.
var LFST = fs.readFileSync('MockLFST.json', 'utf8');
var mockLFST = JSON.parse(LFST);
var rate_my_professor = require('./rate_my_professor.js').call;
var rmp = require('./rate_my_professor.js').callback;

var check_requirments = function (classesTaken, classToTake, studentLFST, callback)
{
  var steps = [];
  var x = 0;
  //var i = 1;//temp
  //var js = JSON.parse(classToTake);
  //console.log(classesTaken.classesTaken[0]);
  //console.log(classToTake.CoursesReq[i].PreReqCourseNum);
  for (var i = 0; i < classToTake.CoursesReq.length; i++)
  {
    if (classToTake.CoursesReq.PreReqCourseNum === null || classesTaken.classesTaken[0].CourseNumber === classToTake.CoursesReq[i].PreReqCourseNum)//requirments are met
    {

      //add to learning state
      console.log(classesTaken.classesTaken[0].CourseNumber.valueOf() + "==" + classToTake.CoursesReq[i].PreReqCourseNum);
      console.log("requirments met");
      studentLFST.learningState.push(classToTake.CoursesReq[i]);//adding class taken to array

    }
    else
    {
      // add to OutputKnowledgeItems
      steps.push(classToTake.CoursesReq[i].PreReqCourseNum);//add to list of classes to take
      console.log("need to take class: " + classToTake.CoursesReq[i].PreReqCourseNum);
      studentLFST.OutputKnowledgeItems.push(classToTake.CoursesReq[i]);//adding needed class to array

    }

  }
  callback(null, steps);


}

var create_steps = function (steps, callback)
{
  // match course numbers to course discriptions
  var full_classes = [];//houses full class discription
  console.log("create steps");
  //console.log(obj.CoursesReq.length);
  for (var i = 0; i < steps.length; i++)//iterate through steps
  {
    for (var a = 0; a < obj.CoursesReq.length; a++)//iterate through list of potential classes
    {

      if (obj.CoursesReq[a].CourseNumber == steps[i])//check if PreReqCourseNum = course number
      {
        //console.log("class found" + obj.CoursesReq[a]);//
        rate_my_professor(obj.CoursesReq[a].Professor);//calls rate my professor api
        //rmp.get(class_list.CoursesReq[a].Professor, callback);
        full_classes.push(obj.CoursesReq[a]);//add full class (including discriptions) to array
      }
    }
  }

  //sort the courses into order
  callback(null, full_classes);//return array of full course discriptions
}


/*
    Driver function

*/
check_requirments(mock_progress, obj, mockLFST, function (err, steps) {
  //call create_steps
  steps.sort();
  for (var i = 0; i < steps.length; i++)
  {
    console.log(steps[i]);
    //

  }
  create_steps(steps, function(){

  })
  //find class names


});





//use a binary search to check for classes
// sort classes in order
// compare them to PreReq
