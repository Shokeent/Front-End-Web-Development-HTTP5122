//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject = {
    name: "Shokeen",
    age: 24,
    address: "Toronto, Canada",
    hobby: ["Ice Skating", "Cooking"],

    intro: function(){
        alert("My Name is " + meObject.name + " and I am " + meObject.age + " years old.");
    }
}

// console.log(meObject.hobby);

// alert("My Name is " + meObject.name + " and I am " + meObject.age + " years old.");

meObject.intro();