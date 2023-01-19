
function multiplication(num1,num2) {
    let mul =0 
    for (let i = 1; i <= num2; i++) {
        mul = mul + num1 ;        
    }
    return mul
}
console.log(`Multiplication = `,multiplication(5,6));
