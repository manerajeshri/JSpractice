// creating obj

const personObj ={
    // key : value,
    name: "raje",
    age : 32,
    no: 7709830074
}

console.log(personObj);

/// acessing obj
console.log(`1] using . notation ==>personObj.name ,personObj.age,personObj.no`);
console.log(personObj.name ,personObj.age,personObj.no);
console.log(`2] Using [""] notation ==> personObj["name"],personObj['age'],personObj["no"]`);
console.log(personObj["name"],personObj['age'],personObj["no"]);

//Add property
console.log(`Add property: personObj.company = "TCS"; `);
personObj.company = "TCS";
console.log(personObj);

// update property
console.log(`update property : personObj.name = "Rajeshri";`);
personObj.name = "Rajeshri";
console.log(personObj);

// delete property
console.log(`delete property : delete personObj.no;`);
delete personObj.no;
console.log(personObj);

// Creating an empty object
console.log(`Creating an empty object`);
const obj ={};
console.log(obj);
console.log(`adding obj.city= "pune";`);
obj.city= "pune";
console.log(obj); // {city: 'pune'} == > we can update

// let obj ={}; //SyntaxError: Identifier 'obj' has already been declared
// obj.city= "satara";
// console.log(obj);



// What if we use const instead of let, Can we add properties then?

let employee = { };
employee.name = "Mohit";
console.log(employee); // {name: 'Mohit'}

const employee1 = { };
employee1.name = "Rohit";
console.log(employee1); // {name: 'Rohit'}



//METHOD==> function as value
console.log(`METHOD==> function as value`);
const person ={
    // key : value,
    name: "raje",
    age : 32,
    no: 7709830074,
    greet : function () {console.log(`hi I am method. Object method shorthand`)} ,// 1] no return
    greetReturn : function () {return `hi I am method. Object method shorthand`} // 2] with return

}
// 1] no return ==>  greet : function () {console.log(`hi I am method. Object method shorthand`)}
console.log(`\n1] no return ==>  person.greet(); `);
person.greet();


console.log(`\n 2] with return greetReturn ==> console.log(person.greetReturn());`);
console.log(person.greetReturn());

console.log(`\n 3] storing return in variable and logging variable let msg = person.greetReturn(); 
console.log(msg);`);
let msg = person.greetReturn(); 
console.log(msg);

// All Entries
console.log(`All Entries : Object.entries`);
console.log(Object.entries(person));
// All keys
console.log(`All keys : Object.keys`);
console.log(Object.keys(person));
// All values
console.log(`All values`);
console.log(Object.values(person));

// in operator ==> tocheck property exist or not in object
console.log(`in operator ==> tocheck property exist or not in object`);
console.log("age" in person); // true


// getting all entries , keys and values
console.log(`getting all entries , keys and values`);

console.log(`Object.entries(personObj) :`, Object.entries(personObj));
console.log(`Object.keys(personObj) :`, Object.keys(personObj));
console.log(`Object.values(personObj) :`, Object.values(personObj));