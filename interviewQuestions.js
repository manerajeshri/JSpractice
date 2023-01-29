// 3] How to declare and initialize the variable together?
	var num = 10 ; 
	var myName = "Rajeshri";

// 4] How to access a JavaScript Variable?
	console.log(num);
    var z= num;
    console.log(z);

  //  Declare Vs Define
    var x; // only declation done 
    console.log(x); // undefined

    var x=10; // declare and assigned value = Define
    console.log(x); // 10

    // typeof operator

    console.log(typeof x);
    console.log(typeof (myName));

    // null Vs Undefined
    // So, null is nothing and undefined is just missing something. 
    
    var y; // only declation done no any value assign then its undefined
    console.log(y); // undefined
    console.log(typeof y); // undefined

    var z = null
    console.log(z);
    console.log(typeof z);
    //typeof() will return 'object' when called on a null variable

    // 8] Procedure to define multiple variables in a single step in JavaScript?

    var num1=11,num2=12,num3=13,num4=14; // define multiple variables in a single step in JavaScript
    console.log(num1,num2,num3,num4); // 11 12 13 14

    // 6] How to re-declare variables in JavaScript?
// If you re-declare a JavaScript variable declared with var, it will not lose its value.
// The variable carName will still have the value "Volvo" after the execution of these statements:

    var carName = "Volvo";
    console.log(`declaration: `, carName); // declaration:  Volvo
    var carName;
    console.log(`after redeclaration: `, carName); //after redeclaration:  Volvo

    // This will not work: 
    // let carName = "Volvo";
    // console.log(`declaration with let: `, carName);
    // let carName;
    // console.log(`after redeclaration with let: `, carName); 
    // SyntaxError: Identifier 'carName' has already been declared

// == and ===
console.log(`\n == and ===`);
if (5 == "5") {
  console.log(`5 == "5" ===> true as JS tries to convert to same data type and compare`);
} else {
  console.log(`5 == "5" ===> false`);
}


if (5 === "5") {
  console.log(`5 === "5" ===> true `);
} else {
  console.log(`5 === "5" ===> false as its types are different`);
}





