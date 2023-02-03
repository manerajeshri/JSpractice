const array = [ 1,2,3,4,5,6,7];
console.log(`length of array:`,array.length);
console.log(array.indexOf(1));
console.log(array.indexOf(7));

// traversing array using for loop

console.log(`traversing array using for loop`);
let array1=[],reverseArray2=[]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);   
    array1.push(element);
    // reverse using unshift ()
    reverseArray2.unshift(element)
}
console.log(array1);
console.log(`reverse using unshift ()`);
console.log(reverseArray2);

console.log(`\n traversing array in reverse using for loop`);
let reverseArray= [];
for (let i = array.length-1; i >=0; i--) {
    const element = array[i];
    console.log(element);
    reverseArray.push(element);
}
console.log(reverseArray);

// reversing array using reverse()
console.log(`reversing array using reverse()`,array.reverse());


// sort
const arrays =[3,7,6,4,1,2,5,11]
console.log(`Sort ==> sortingArray`);
console.log(`Array is :`,arrays );
let sortingArray = arrays.sort();
console.log(`using sort`,sortingArray); // using sort (8) [1, 11, 2, 3, 4, 5, 6, 7]

// for proper sort use

// reverse using sort
console.log(`reverse using sort`);
console.log(sortingArray.reverse());




// slice ()==> to get selected elements original array remains unchanged
console.log(`\nslice ()==> to get selected elements original array remains unchanged`);
console.log(`\noriginal array`,array);
console.log(`array.slice(1)`,array.slice(1));
console.log(`array.slice(1,4)`,array.slice(1,4)); // splice(startIndex , endIndex) 
console.log(`original array : remains same`,array,`\n`);

console.log(`splice ()==> to get selected elements original array changes`);
console.log(`\noriginal array`,array);
// console.log(array.splice(5)); // (2) [6, 7] splice(start) by defaultit will take till end
console.log(`array.splice(2,4)`,array.splice(2,4)); // (5) [3, 4, 5, 6, 7] splice(start , count) 
// console.log(array.splice(2,0,333)); // (0) [] ==> 0 means add element 333 @ index 2 
// console.log(array.splice(2,1,55)); // (1) [3] ==> 1 means Replace 3 @ index 2 by 55

console.log(`original array : changes`,array,`\n`);

console.log(`WAP to find the even positioned value ?`);
const arr = [ 1,2,3,4,5,6,7];
console.log(`\nusing for`);
for (let i = 0; i < arr.length; i=i+2) {
    const element = arr[i];
    console.log(i,element);
}
console.log(`\nusing forin`);
for (const key in arr) {
        const element = arr[key];
        if (key%2==0) {
            console.log(key,element);
        }
        
    }