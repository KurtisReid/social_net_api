
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


var check_requirments = function (classesTaken, classToTake, studentLFST, callback)
{
  //var i = 1;//temp
  //var js = JSON.parse(classToTake);
  console.log(classesTaken.classesTaken[0]);
  //console.log(classToTake.CoursesReq[i].PreReqCourseNum);
  for (var i = 0; i < classesTaken.classesTaken.length; i++)
  {
    if (classesTaken.classesTaken[0].CourseNumber == classToTake.CoursesReq[i].PreReqCourseNum || classToTake.CoursesReq.PreReqCourseNum == null)//requirments are met
    {
      //add to learning state
      console.log(classesTaken.classesTaken[0].CourseNumber + "==" + classToTake.CoursesReq[i].PreReqCourseNum);
      console.log("requirments met");
      studentLFST.learningState.push(classToTake.CoursesReq[i]);//adding class taken to array
      callback(null);
    }
    else
    {
      // add to OutputKnowledgeItems
      console.log("need to take class");
      studentLFST.OutputKnowledgeItems.push(classToTake.CoursesReq[i]);//adding needed class to array
      callback(null);
    }
  }


}

check_requirments(mock_progress, obj, mockLFST, function (err) {

});
