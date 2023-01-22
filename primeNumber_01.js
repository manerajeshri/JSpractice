function IsPrimeNumber(num) {
    
for (let i = 2; i < num; i++) {
    
    
    if ((num % i) == 0) {
        console.log(`Given number is "${num}" and it is "Not a Prime" no.`);
        break;
    } else {
        console.log(`Given number is  "${num}" and it is "Prime" no.`);
        break
    }
    
}
}

IsPrimeNumber(5);
IsPrimeNumber(30);