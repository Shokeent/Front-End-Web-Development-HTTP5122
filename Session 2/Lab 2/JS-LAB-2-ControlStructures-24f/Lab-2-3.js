//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var emailID;
var introMessage = "Would you like to join our mailing list?";
var messageOut = "Thank you,";
var enterEmail = "Please enter your email address to join our newsletter.";
var declineMessage = "we will not bother you again.";
var invalidMessage = "but your email was not valid.";
var defaultText = "me@example.com";
var validMessage = "our next newsletter will be sent to ";

//==== LOGIC =============

var userInput = confirm(introMessage);
console.log (userInput)


if (userInput === true) {
    var emailID = prompt(enterEmail, defaultText);

    if (emailID === "" || emailID === null || emailID === defaultText) {
    alert( messageOut + invalidMessage)
    console.log("Invalid Email");

    } else {
    alert (messageOut + validMessage + emailID)
    console.log("Valid Email");
    }

    } else {
    alert(messageOut + declineMessage);
    console.log("User Denied")
}