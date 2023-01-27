// There are three ways of finding the largest number in a JavaScript array that is listed below −
// Traversing the Whole Array
// Using the reduce() Method
// Using the Math.max() and apply() methods

// largest num : Traversing the Whole Array

const array=[3,1,2,3,7777777,8,3,9,45,7,3,9090];

let largest = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}
console.log(`1] Largest number from array : [${array}] is ${largest}`);

// smallest num : Traversing the Whole Array

let smallest =array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] <smallest) {
        smallest = array[i];
    }
}
console.log(`2] smallest number from array : [${array}] is ${smallest}`);

