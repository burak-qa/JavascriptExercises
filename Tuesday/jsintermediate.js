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
            sum +=i;
        }
    }
    return sum;
}
console.log(sumOfNumbers(2700));
// ------------------------------------------------------------------------------------------

/* 2. Shift the Values
Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2]. */
