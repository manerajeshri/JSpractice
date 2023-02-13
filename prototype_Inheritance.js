// constructor function


function Person (){
    this.name ="ram";
    this.age=67;
}

// creating object
let person1 = new Person ();
let person2 = new Person ();
console.log(person1);
console.log(person2);

// adding property
person1.gender = "Male";
console.log(person1); // Person {name: 'ram', age: 67, gender: 'Male'}
console.log(person2); // Person {name: 'ram', age: 67}

// adding new property to  constructor function
Person.prototype.city ="Pune";
console.log(person1); // Person {name: 'ram', age: 67, gender: 'Male'}
console.log(person1); // Person {name: 'ram', age: 67, gender: 'Male'}