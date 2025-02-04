//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.


function averageNum(a,b,c,d,e){
    var avg = (a + b + c + d + e) / averageNum.length; 
    return avg.toFixed(1);
}

var avgNum = averageNum(5,10,15,20,25);
console.log(avgNum);


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS


var http5114 = 55;
var http5110 = 70;
var http5121 = 10;
var http5122 = 90;
var http5125 = 90;


var total = averageNum(http5110, http5114, http5121, http5122, http5125);

if (total >= 70){
    alert("Success.!!")
} else {
    alert("Review required")
};
