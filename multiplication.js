
function multiplication(num1,num2) {
    let mul =0 
    for (let i = 1; i <= num2; i++) {
        mul = mul + num1 ;        
    }
    return mul
}
console.log(`Multiplication (5,0) = `,multiplication(5,0));

console.log(`Multiplication (5,6) = `,multiplication(5,6));

console.log(`Multiplication (6,6) = `,multiplication(6,6));

console.log(`Multiplication (6,7) = `,multiplication(6,7));

console.log(`Multiplication (0,7) = `,multiplication(0,7));



console.log(`\nMethod 2] using do while`);
// simple 

let result = 0;
let counter =0;
function operation (num1, num2) {

    do {
      result = result+num1;
      counter++;

    } while (counter<num2);
    
    // console.log(result);
    return result

}

// operation(7,-8);

console.log(`Multiplication (5,0) = `,operation(5,0));

console.log(`Multiplication (5,6) = `,operation(5,6));

console.log(`Multiplication (6,6) = `,operation(6,6));

console.log(`Multiplication (6,7) = `,operation(6,7));

console.log(`Multiplication (0,7) = `,operation(0,7));