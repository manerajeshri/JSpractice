// There are three ways of finding the largest number in a JavaScript array that is listed below −

// Traversing the Whole Array
// Using the reduce() Method
// Using the Math.max() and apply() methods


let arr = [5, 10, 20, 3, 98, 95];
let largest = arr[0];
function largestNumber() {
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest)
      largest = arr[i];
   }
 console.log(largest);
}
largestNumber();

