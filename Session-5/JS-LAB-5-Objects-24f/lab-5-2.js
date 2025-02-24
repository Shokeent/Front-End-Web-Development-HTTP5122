//#### LAB 5 - OBJECTS ####
//PART 2:  CREATE A BANK CUSTOMER OBJECT
//1. Create the object structure first.

var customer = {
    lastname: "Naidu",
    branchNumber: 11123,
    accountBalance: 500.25,
    interestRate: 1.03,
    multipleAccounts: false,
    //2. Add the required properties to your object.
    makeDeposit: function(a){
        customer.accountBalance = customer.accountBalance + a ;
        return ("Thank you, your current balance is now $" + customer.accountBalance);
    },

    makeWithdrawal: function(b){
        customer.accountBalance = customer.accountBalance - b ;
        return ("Thank you, your current balance is now $" + customer.accountBalance);
    },

    addInterest: function(){
        if(customer.multipleAccounts === true) {
        customer.interestRate = customer.interestRate + 0.005;
        customer.accountBalance = customer.accountBalance * customer.interestRate ;
        } else {
            customer.accountBalance = customer.accountBalance * customer.interestRate;
        }
        return ("Your Current Balance is $" + customer.accountBalance.toFixed(2) );
    }
}

//3. Add your first method and test it. Remember, the methods will change the properties of the object.
// customer.makeDeposit(); 
//4. Add your second method and test it. 
// customer.makeWithdrawal(); 
//5. Create the required output to complete steps 6-10 of the lab.
console.log(customer.accountBalance);

customer.makeDeposit(200);

console.log("Thank you, your current balance is now $" + customer.accountBalance);

customer.makeWithdrawal(75);

console.log("Thank you, your current balance is now $" + customer.accountBalance);

//6. Once everything is working, tackle the Stretch Goal!
console.log(customer.addInterest());

console.log(customer.addInterest(customer.multipleAccounts));

