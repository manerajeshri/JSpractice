
// find occurance of no 
// find repeated no
let array = [1,2,2,3,3,3,4,4,4,4,5,6,6,7,9999,7];

console.log(array);
console.log(typeof(array)); // object

let largest = array[0];
   for (let i = 1; i < array.length; i++) {
      if (array[i] > largest)
      largest = array[i];
   }
 console.log(largest);

array.forEach(element => {
    // console.log(element);
});

for (let i = 0; i <=largest; i++) {
    let a = array.filter(x => x===i).length;
    if (a !=0) {
        console.log(`The number is ${i} and it occurarce ${a} Times`);
    }
    
}

function IsNumberIncludes(num) {
    
    if (array.includes(num)== true) {
          
       let count = array.filter(b => b === num ).length;
        console.log(`The number is ${num} and it occurarce ${count} Times`);  
         
    }
}

IsNumberIncludes(7);
