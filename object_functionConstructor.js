


// function constructor ==> to create object
console.log(`function constructor ==> to create object`);

// 1] simple function without arguments

console.log(`1] simple function without arguments`);

function Person () {
    this.name = "Ram";
    this. age = 34;
}

// creating object
let ram =new Person();
console.log(`created object ==>`);
console.log(ram);

// 2] simple function with arguments

console.log(`2] simple function with arguments`);

function PersonFC(person_name,person_age,person_gender) {
    this.person_name=person_name;
    this.person_age=person_age;
    this.person_gender =person_gender
    // adding method
    this.fullName = function () {
        console.log(`Name : ${raje.person_name} ${raje.person_age} ${raje.person_gender}`);
        // if we use return then dont use log here
    }
}
// creating object

let raje = new PersonFC("Rajeshri",32,"Female");
let sam = new PersonFC("Sam",44,"Male");

console.log(`created object ==>`);
console.log(sam);
console.log(`${raje.person_name + raje.person_age + raje.person_gender}`);
console.log(`Name : ${raje.person_name} ${raje.person_age} ${raje.person_gender}`);
console.log(`acessing method ==> raje.fullName()`);
raje.fullName();
// to log output with return log(raje.fullName();)