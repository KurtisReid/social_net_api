
//reads mock file

// checks if requirments are met for each class
// if requirments are met, or CoursesReq = null, then add to learningState
// if requirments are not met, then it adds it to the list of todos/steps
var fs = require("fs");
var input = fs.readFileSync('CSDegree.json', 'utf8');
var obj = JSON.parse(input);
var mock_progress = '{CourseNumber": "10051",}';//mock of courses already taken.


var check_requirments = function (classesTaken, callback)
{
  if (classesTaken == input.CoursesReq[0].PreReqCourseNum || input.CoursesReq[0].PreReqCourseNum == null)//requirments are met
  {
    //add to learning state

  }
  else
  {
    // add to OutputKnowledgeItems
  }

}
