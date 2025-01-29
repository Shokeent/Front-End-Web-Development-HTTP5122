//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========

var myCart = [];
var freeShipping = 35;
var totalPrice = 0;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.

while (totalPrice < freeShipping) {
	
	//GET ITEM COST FROM USER

	var itemPrice = prompt("Enter the price of the item:");
	
	//CONVERT USER INPUT TO A NUMBER	

	itemPrice = parseInt(itemPrice);

	//ADD ITEM COST TO RUNNING TOTAL VARIABLE

	totalPrice += itemPrice;

	//PUSH ITEM COST TO CART ARRAY
	myCart.push(itemPrice);
}
	
//SEND POPUP MESSAGE TO USER

alert("Your shipping for this order will be free! Total purchase: " + totalPrice + ".");


//SEND OUTPUT TO CONSOLE

console.log("Item prices: " + myCart);
