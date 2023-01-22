function primenum(n) {
count = 0;
for (let index = 2; index < n; index++){
    
if (n % index == 0) { 
count++; 
}
}
if (count == 0) {
console.log(`Given number ${n} prime number`)}
else {
    console.log(`Given number ${n} is not prime number`)
}
}
primenum(0);
primenum(1);
primenum(2);
primenum(3);
primenum(4);
primenum(5);
primenum(6);
primenum(7);
primenum(8);
primenum(9);
primenum(10);
primenum(11);
