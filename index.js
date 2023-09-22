"use strict";
//If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let numbers = [10, 20, 30, 40, 50];
let index = 6;
let errorValue = numbers[index];
//console.log(errorValue);
if (index >= 0 && index < numbers.length) {
    let correctIndex = numbers[index];
    console.log("Correct index:", correctIndex);
}
else {
    console.log("Index is not correct");
}
//correcting the error
let index2 = 3;
let correctedValue = numbers[index2];
console.log(index2 >= 0 && index2 < numbers.length ? correctedValue : "Index is not correct");
