//#### LAB 4 - FUNCTIONS ####
//PART 1:  PROGRAM ALERT FUNCTION

//################## CREATE YOUR FUNCTION

function coursePopup(coruseCode, courseName) {  
    alert("The course code " + coruseCode + " is " + courseName + ".")
}

//################## TEST YOUR FUNCTION

var COURSECODE1 = "HTTP5121";
var COURSENAME1 = "Web Design";

var COURSECODE2 = "HTTP5122";
var COURSENAME2 = "Front-End Web Development";

var COURSECODE3 = "IXD5106";
var COURSENAME3 = "Interaction Design";


coursePopup(COURSECODE1, COURSENAME1);
coursePopup(COURSECODE2, COURSENAME2);
coursePopup(COURSECODE3, COURSENAME3);
