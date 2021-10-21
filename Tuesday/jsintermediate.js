/* 1. Addition
Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator. */
let sum = 0
for(let i = 200; i <= 2700; i++){
    if((i % 3 === 0 || i % 5 === 0) && (i % 15 !== 0)){
    sum += i;
    }
}
console.log(sum)

// Or 

function sumOfNumbers(number){
    let a = 3
    let b = 5
    let sum = 0;
    for(let i = 200; i <= number; i++){
        if((i % a === 0 || i % b === 0) && (i % (a * b)) !== 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfNumbers(2700));
// ------------------------------------------------------------------------------------------

/* 2. Shift the Values
Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2]. */


let y = [2,1,6,4,-7];
let reverseY = y.reverse();
console.log(reverseY); //output: [-7, 4, 6, 1, 2]
console.log(y); //output: [-7, 4, 6, 1, 2]

// Or; we don’t have to mutate the original array; we can create a copy of the array and then reverse it.

let numbers = [2,1,6,4,-7];
let reverseNumbers = [...numbers].reverse();
console.log(reverseNumbers); //output: [-7, 4, 6, 1, 2]
console.log(numbers); //output: [2,1,6,4,-7]

// Or;
let z = [2, 1, 6, 4, -7];
let [a, b, c, d, e] = z;
z= [e, d, c, b, a];
console.log(z); //output: [-7, 4, 6, 1, 2]

// ----------------------------------------------------------------------------------------

/* let accessAllowed;
let age = prompt('How old are you?', '');

if(age>18){
    accessAllowed = true;
} else {
    accessAllowed = false;
};
alert(accessAllowed); */

/* 3. FizzBuzz
Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...] */
let my_array = [];
for (let i = 1; i <= 135; i++){
    if (i % 3 === 0 && i % 15 !== 0){
        my_array.push('Fizz');
    }else if (i % 5 === 0 && i % 15 !==0){
        my_array.push('Buzz');
    }else if (i % 15 === 0){
        my_array.push('FizzBuzz');
    }else{
        my_array.push(i);
    }
}
console.log(my_array);

/* 4. Fibonacci
For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
0 1 1 2 3 5 8 13 21... */

