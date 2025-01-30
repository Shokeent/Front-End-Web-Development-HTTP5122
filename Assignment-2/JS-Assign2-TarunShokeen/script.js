// alert("Hello World");


// declare and initialize 7 variables with 7 movie names

var movie_1 = "Avatar";
var movie_2 = "IT";
var movie_3 = "The Martian";
var movie_4 = "Avengers";
var movie_5 = "Silo";
var movie_6 = "Us"
var movie_7 = "Zodiac";


// create a JavaScript array to hold these variables and represent your top 7 movie list

var myMovies = [movie_1, movie_2, movie_3, movie_4, movie_5, movie_6, movie_7];


// Output messages to the console with a loop that lists all of the movies with their number 

for (var i = 0; i < myMovies.length; i++ ) {
    console.log ("Movie " + (i + 1) + ": " + myMovies[i]);
}

//  user is asked, "Which top 7 movie would you like?"

var userInput = prompt("Which top 7 movie would you like", "Pick a number: 1-7");


//Validate the user input.

while( parseInt(userInput) != userInput || userInput === "" || userInput === null || userInput < 1 || userInput > 7) {

    alert("Please Enter a Number between 1 and 7..!!");
    userInput = prompt("Which top 7 movie would you like", "Pick a number: 1-7");
}  

//  user will then see a pop-up that says, "Number num on the list is " with num being the movie’s position on the top 7, followed by the movie title.

var userChoice = parseInt(userInput) - 1;

alert("Number " + userInput  + " on the list is " + myMovies[userChoice])

