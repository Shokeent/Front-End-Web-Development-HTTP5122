// DEFINING THE OBJECT 'CRICKET' STRUCTURE AND DEFINING OBJECT PROPERTIES.
var cricket = {
    teamName: "India",
    captain: "Rohit Sharma",
    totalMatches: 200,
    winPercentage: 65.5,

    // DEFINING THE OBJECT METHOD TO UPDATE THE WIN PERCENTAGE.
    updateWinPercentage: function (newPercentage) {
        cricket.winPercentage = newPercentage;
        alert("The win percentage has been updated to " + newPercentage + ".");
    }
}

// DISPLAYING THE OBJECT IN THE CONSOLE BEFORE MODIFICATONS.
console.log(cricket);

// POPUPS TO COLLECT USER INPUTS AND UPDATE OBJECT PROPERTIES.
cricket.teamName = prompt("Enter a new team name:", cricket.teamName)
cricket.totalMatches = prompt("Enter the total matches:", cricket.totalMatches)
var newPercentage = prompt("Enter the new win percentage:", cricket.newPercentage)

// CALLING THE OBJECT METHOD TO UPDATE THE 3RD PROPERTY.
cricket.updateWinPercentage(newPercentage);

// DISPLAYING THE OBJECT IN THE CONSOLE AFTER MODIFICATONS.
console.log(cricket);