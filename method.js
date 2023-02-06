// object
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