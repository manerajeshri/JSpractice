
// ===========================================================// Method 1 : using for loop

function mul(nm1,nm2) {
    const num1 =Math.abs(nm1);
    const num2 =Math.abs(nm2);
    let mul =0 ;
    for (let i = 1; i <= num2; i++) {
        mul = mul + num1 ;        
    }
    return (nm1<0 && nm2>0 || nm2<0 && nm1>0)? `${nm1} * ${nm2} =  ${-mul}` : `${nm1} * ${nm2} =  ${mul}`
}
// ========================================================== Method 2 : using Division

// function mul(num1,num2) {
    
//     return (num2==0||num1==0) ? `Multiplication of ${num1} & ${num2} = ${0}` : `Multiplication of ${num1} & ${num2} = ${(num1/(1/num2))} `
// }

console.log( mul(-9,-7));
console.log(mul(-9,7));
console.log(mul(9,-7));
console.log(mul(9,7));
console.log(mul(9,0));
console.log(mul(0,7));
console.log(mul(-9,0));
console.log(mul(0,-7));


// ===========================================================// Method 3 : using do while
// console.log(`\nMethod 3] using do while`);
// // simple 

// let result = 0;
// let counter =0;
// function operation (num1, num2) {

//     do {
//       result = result+num1;
//       counter++;

//     } while (counter<num2);
    
//     // console.log(result);
//     return result

// }