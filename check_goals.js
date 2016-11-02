
//reads mock file

// checks if requirments are met for each class
// if requirments are met, or CoursesReq = null, then add to learningState
// if requirments are not met, then it adds it to the list of todos/steps
var fs = require("fs");
var input = fs.readFileSync('CSDegree.json', 'utf8');
var obj = JSON.parse(input);
var mock_progress = '{CourseNumber": "10051",}';//mock of courses already taken.
var LFST = fs.readFileSync('MockLFST.json', 'utf8');
var mockLFST = JSON.parse(LFST);


var check_requirments = function (classesTaken, classToTake, studentLFST, callback)
{
  var i = 1;//temp
  var js = JSON.parse(classToTake);
  console.log(js.Goal);
  if (classesTaken.CourseNumber == classToTake.CoursesReq.PreReqCourseNum || classToTake.CoursesReq.PreReqCourseNum == null)//requirments are met
  {
    //add to learning state
    studentLFST.learningState.push(classToTake.CoursesReq[i]);//adding class taken to array
    callback(null);
  }
  else
  {
    // add to OutputKnowledgeItems
    studentLFST.OutputKnowledgeItems.push(classToTake.CoursesReq[i]);//adding needed class to array
    callback(null);
  }

}

check_requirments(mock_progress, input, mockLFST, function (err) {

});
