

const person ={

    name : "RAj",
    age :22,
}

console.log(person);

// freeze object

Object.freeze(person);
person.name="Raj";
person.city="Pune";
delete person.age;

console.log(person);

// let array =[1,2,3]
// Object.freeze(array); // Uncaught TypeError TypeError: Cannot add property
// array.push(7);
// console.log(array);