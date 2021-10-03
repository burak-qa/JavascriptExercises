// 1. Print 1 - 135
// Write a program using JavaScript that will print all the numbers from 1 to 135.
for (let i = 0; i <= 135; i++){
    console.log(i);
}

// 2. Print Odd Numbers 1 - 135
// Write a program using JavaScript that will print all the odd numbers from 1 to 135.
for(let i = 0; i<=135; i++){
    if (i % 2 === 1){
    console.log(i)
    };
}

// 3. Sum of Printed Numbers
// Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:
/* Number is: 0 Sum: 0
Number is: 1 Sum: 1
Number is: 2 Sum: 3
Number is: 3 Sum: 6 */
let total = 0
for(let i = 0; i<=135; i++){
    total += i;
    console.log(`Number is: ${i}  Sum: ${total}`);
}

/* 4. Print the elements of an array
Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes. */
const x = [1,4,2,12]
function numbersArray(y){
    for(let i=0; i < y.length; i++){
        console.log(y[i])
    }
}
numbersArray(x)

/* 5. Find Max
Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero. */
function maxNumber(b){
    max = b[0]
    for(let i = 1; i < b.length; i++){
        if (max < b[i]){
            max = b[i]
        }
    }
    return max;
}
const b = [2, -3, -6, 35, 0, 5];
console.log(maxNumber(b));

/* 6. Get Average
Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2. */
const c = [2, 1, 3];
avg = 0;
for (let i = 0; i < c.length; i++){
    avg += c[i];
};
console.log(avg /= c.length);

/*
7. Eliminate the Negatives
Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].*/
const z = [2, -1, 4, -3];
for(let i = 0; i < z.length; i++){
    if( z[i] < 0){
        z[i] = 0;
    }
}
console.log(z);
// ------------
function remNegNum(v){
    for(let i = 0; i < v.length; i++){
        if(v[i] < 0){
            v[i] = 0;
        }
    }
    return v
}

const o =[5, 7, -4, -7, 0, 5, 8, 13,89, -60]
console.log(remNegNum(o));

/* 8. Number to String
Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].
*/
const m = [1, -4, 0, -1]
for(let i = 0; i < m.length; i++){
    if(m[i] < 0){
        m[i] = "Turing"
    }
}
console.log(m)