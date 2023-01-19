

// with all possible combination of numbers


function multiplication(num1,num2) {
    let mul =0 
 
    if (num1<0 && num2<0) {
        num11 = -(num1)
        num22 = -(num2)
        for (let i = 1; i <= num11; i++) {
            mul = mul + num22 ; 
            result = mul       
        }

        // num11 = -(num1) -7
        // num22 = -(num2)-8
        // for (let i = num2; i <= 0 ; i--) {
        //     mul = mul +  num1; 
        //     result = mul       
        // }

    }
if (num1<0 && num2>0) {
    num11 = -(num1)
    for (let i = 1; i <= num11; i++) {
        mul = mul + num2 ; 
        result = -mul       
    }
}

if (num1>0 && num2<0) {
    num22 = -(num2)
    for (let i = 1; i <= num22; i++) {
        mul = mul + num1 ; 
        result = -mul       
    }
}

if (num1>=0 && num2 >= 0) {
    for (let i = 1; i <= num2; i++) {
        mul = mul + num1 ; 
        result = mul       
    }
}
 
        console.log(`Multiplication of ${num1} * ${ num2}  = `,result);
    // return mul
}
// console.log(`Multiplication  = `,multiplication(1,-2));
multiplication(-1,-2);
multiplication(-1,2);
multiplication(1,-2);
multiplication(1,2);
console.log("");
multiplication(-7,-8);
multiplication(-7,8);
multiplication(7,-8);
multiplication(7,8);
multiplication(0,8);
multiplication(7,-0);
multiplication(0,-8);
multiplication(-7,-0);
