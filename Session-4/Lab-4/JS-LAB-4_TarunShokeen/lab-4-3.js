//#### LAB 4 - FUNCTIONS ####
//PART 3:  SAFE DOG WALKING CHECK 


//================== CREATE YOUR checkTemp FUNCTION
//This function's job is to return a boolean as per the input given.
//It needs to receive... input from the user
//It will return... a boolean acc. to the condition

function checkTemp(currentTemp){
    var correctTemp = false;
    if (currentTemp > 30 || currentTemp < -10) {
        correctTemp = true;
    }
    return correctTemp;
}
var inputTemp = prompt("Enter the current temp.", "In Celsius.!!");


//================== LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

if (checkTemp(inputTemp) === true) {
    alert("Yikes! This is no weather for dog walking!");

} else{
    alert("“You're good, have a nice walk!”");
};
