//Exercises 1
/* let user = {
    name: "John",
    age: 30,
    isAdmin: false
}

console.log(user) */

// Exercise 2    Give the right name
 // Create the variable with the name of our planet. How would you name such a variable?                          
 // Create the variable to store the name of the current visitor. How would you name that variable?   

/* let planet = "World";
let visitorName = "Burak";

console.log(planet) */


//Exercises 3
/* let phrase = "Hello"

if (true) {
    let user = " John";
    function sayHi(){
        alert(`${phrase}, ${user}`)
    }
}
sayHi() */
// the result will be (Hello John)
// why ? because the if statment is true and the function will work .


/* Exercise 4
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */

/* let user = {
    name: "John",
    surname: "Smith"
}
let name = "Pete";
user.name = name;
 */

//Exercise 5
//Is it possible to change an object declared with const, how do you think and why?

/* const ad = {
    name: "John"
}
ad.name = "Pete" */

/* Answer: Yes, as the constant one is the whole object so we cannot write ad ={} with new values but the items inside this object are still variables. */

//Exercise 6
//Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.

/* let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
}

if(Object.keys(salaries).length === 0){
    let sum=0
    console.log('sum =', sum)
} else{
    let sum=(a,b,c) => {
        console.log('sum=',a+b+c)
    }
    let {Fred,Ted,Ghaith}=salaries
    sum(Fred,Ted,Ghaith) 
} */

//Exercise 7
/* if(a + b < 4){
    result = "Below";
} else {
    result = "Over";
} */
//Rewrite this if using the ternary operator '?':
//a + b < 4 ? result = "Below" : result = "over"


//Exercise 8
//Rewrite if..else using multiple ternary operators '?'.

/* let message;
if(login == "Employee"){
    message = "Hello";
} else if (login == "Director"){
    message = "Greetings";
} else if (login == ""){
    message = "No login";
} else {
    message = "";
}

login == "Employee" ? message = "Hello" : login == "Director" ? message = "Greetings" : login =="" ? message = "No login" : message ="";  */