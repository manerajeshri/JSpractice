// https://linuxhint.com/sort-array-in-java-without-using-sort-method/
// WAP to find 3rd highest number in array using for loop


// we have created an integer type array named “array” initialized with the following values:

const array =[ 3,12,4,67,23,14,89,5];
console.log(`Given array`);
console.log(array);

// sorting with . sort()
console.log(`With sort`);
let arr = array.sort( (a,b )=>{
    return a>b ? 1:-1
} );
console.log(arr);

// We will create an integer type variable “index” that will store the indexes of the array, initialized with “-1” because the index of array starts from 0, so in the loop it will store “0” index:

var index = -1 ;

let newarray=[];

// Here, we will use two “for” loops, one will be used to iterate the array until the length of the array and the second one will be used to check the condition and swap the elements if the 1st element is less than the 2nd one:

for (let i = 0; i < array.length; i++) {
    index=i;
    for (let j = i; j <= array.length-1; j++) {     
        if (array[j]<array[index]) {
            index = j;
        }
    }
    let temp =array[i];
    array[i]=array[index];
    array[index]= temp;
    }
    // Then, print the sorted array by using another “for” loop:
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]+ " , ");
        newarray.push(array[i])
        
    }
    console.log(`Withouth sort`);
console.log(newarray);

