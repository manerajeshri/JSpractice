
// repeted num / occurance

function occuranceOfNumber(num,givenarray) {
    let count=0;
for (let i = 0; i < givenarray.length; i++) {
    if (num===givenarray[i]) {
        count++
    }
}
console.log(`1] The array is : [${givenarray}] The number ${num} is occured ${count} times in array`);
}
occuranceOfNumber(3,[1,3,4,5,6,7,3,3,3]);

// repeted num / occurance with index

function occuranceOfNumberwithIndex(num,givenarray) {
    let count=0; let indexArray =[];
for (let i = 0; i < givenarray.length; i++) {
    if (num===givenarray[i]) {
        count++;
        indexArray.push(i)
    }
}
count == 0 ? console.log(`2] The array is : [${givenarray}] The number ${num} is occured ${count} times in array`) : console.log(`2] The array is : [${givenarray}] The number ${num} is occured ${count} times in array at index ${indexArray}`);
}
occuranceOfNumberwithIndex(3,[3,3,4,5,6,7,3,3,3]);
occuranceOfNumberwithIndex(10,[3,3,4,5,6,7,3,3,3]);
occuranceOfNumberwithIndex("a",[3,3,4,5,6,7,3,3,3,"a"]);

console.log(`\n  occurance with filter `);
let array1=[1,7,90,65]
function IsNumberIncludes(num) {
            
       let count = array1.filter(b => b === num ).length;
        console.log(`The number is ${num} and its occurarce ${count} Time`);  
         
    }
IsNumberIncludes(7);

// occurance using filter from array all element
console.log(`\n occuranceOfAllNumbers in array using filter`);
function occuranceOfAllNumbers(array) {
 let largest = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i]>largest) {
        largest=array[i]
    }
}
for (let i = 0; i <=largest; i++) {
    let a = array.filter(x => x===i).length;
    if (a !=0) {
        console.log(`The number is ${i} and it occurarce ${a} Times`);
    }
}
}
    occuranceOfAllNumbers([1,46,2,2,77,3,3,3,46,55]);


    // occurance with include 
    console.log(`\n  occurance with include `);
let array=[1,7,90,65]
function IsNumberIncludes(num) {
   
    if (array.includes(num)== true) {
          
       let count = array.filter(b => b === num ).length;
        console.log(`The number is ${num} and it occurarce ${count} Times`);  
         
    }
}
IsNumberIncludes(7);

// console.clear();
// occurance of all number in array using loop

console.log(` occurance of all number in array using loop`);
function occurance(givenarray) {
    // finding largest
    let largest =givenarray[0];
        for (let i = 1; i < givenarray.length; i++) {
            if (givenarray[i]>largest) {
                largest = givenarray[i]
            }   
        }
// occurance
let count=0; 
for (let i = 0; i < largest; i++) {
    let num = givenarray[i]
    for (let j = 0; j < givenarray.length; j++) {
        if (givenarray[j] === num ) {
            if (givenarray[j] != null) {
                givenarray[j]= null;
                count++;
            }
        }
    }
    if (num != undefined) {
        console.log(`num ${num} occurance ${count}`);
        count =0   
    }  
}
}
occurance([56,1,11,2,56,33,44,11,56,555,2]);