// forin ==> string
console.log(`\n forin ==> string`);
const string = "RajeshriMane"
for (const i in string) { // i points to the index
    const element = string[i];
    console.log(element);     
    }

    console.log(`\nfor of loop ==> string\n`); // iterator gives value or element directly
    for (const iterator of string) {
        console.log(iterator);
    }

// forin ==> array
console.log(`\n forin ==> array`);

const array =[1,3,7,9,6,4];
for (const key in array) {
        const element = array[key];
        console.log(element);
    }

    console.log(`\n forof ==> array`);
for (const iterator of array) {
    console.log(iterator);
}


// forin ==> object
console.log(`\n forin ==> object`);
let myDetails = {
name: "aaradhya",
age: 2.5 + "yrs",
mobileNo: "+" + 91 + 7709830074
}

for (const key in myDetails) {
        const element = myDetails[key];
        console.log(`key:`,key,`element :`,element);
        
       }
       
       console.log(`\n forof ==> object NOT POssible`);
// for (const iterator of myDetails.iterator) {
//     console.log(myDetails);
// }