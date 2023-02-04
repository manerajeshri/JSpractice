// creating class

class Person {
    name;
    age
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    play() {
        return `like chess`;
    }

    eat(){
        console.log(`Eats apple`);
    }
}

// creating object using class
console.log(`// creating object1 using class`);

let anil =new Person("Anil",25);

console.log( `Object anil ==>`,anil);
console.log(`type of anil ==>`,typeof anil);

console.log(`\n// creating object2 using class`);
let aaradhya = new Person("Aaradhya", 2.5);
console.log(aaradhya);

// acessing object
console.log(`\nacessing object property ==> aaradhya.name`);
console.log(aaradhya.name);

console.log(`\nacessing object method ==> aaradhya.eat()`);
aaradhya.eat();


console.log(`\nacessing object property & method()`);
console.log(anil.name ,anil.play()); 

// instanceof == >object is instance of Class
console.log(`\ninstanceof == >object is instance of Class`);
console.log(`anil instanceof Person ==>`, anil instanceof Person);