function IsPrimeNumber(num) {
   let count = 0;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        // console.log(`num % i`, i);
        count++;
    }
}
if (count == 0) {
    console.log(`Given no is ${num}: Prime Number `);
} else {
    console.log(`Given no is ${num}: Not a Prime Number `);
}
}

// IsPrimeNumber(0);
// IsPrimeNumber(1);
// IsPrimeNumber(2);
// IsPrimeNumber(3);
// IsPrimeNumber(4);
// IsPrimeNumber(5);
// IsPrimeNumber(6);
// IsPrimeNumber(7);
// IsPrimeNumber(8);
// IsPrimeNumber(9);
// IsPrimeNumber(10);
// IsPrimeNumber(11);
// IsPrimeNumber(30);

IsPrimeNumber(57);