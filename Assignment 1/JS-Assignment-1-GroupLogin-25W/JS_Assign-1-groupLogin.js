
// variable for teamNumber and teamMembers
var teamNumber = 6;

var teamMembers = {
    Tarun: "Tarun Shokeen",
    Mayuresh: "Mayuresh Naidu",            // found this through google 
    Biraj: "Biraj Gautam",
    Parth: "Parth Mevada"
  };

// pop up for entering team no.
 var teamNumberInput = prompt("Enter your team number :");
console.log(teamNumberInput);

// if team number matches, prompt for first name
if (teamNumberInput == teamNumber) {
  var firstNameInput = prompt("Enter your first name:");
  console.log(firstNameInput);

  if (teamNumberInput == "" || teamNumberInput == null)
    alert("Access denied");
  console.log("Access Denied");

// checking if the name belongs to a team member
  if (teamMembers[firstNameInput]) {
    alert("Welcome, " + teamMembers[firstNameInput] + "!");
    console.log("Welcome " + teamMembers[firstNameInput]);
  } else {
    // if the first name does not match

    alert("Access denied! Name not found.");
    console.log("Access Denied");
  }
} else {
  // if team no. does not match
  alert("Access denied! Incorrect team number.");
  console.log("Access Denied");
}