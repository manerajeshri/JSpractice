function printPrimeNumbers(n) {
let count=0;
for (let i = 2; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    
    if (i%j==0) {
        count++
    } 
}
    if (count == 2) {
        console.log(i);    
    }
    count=0;
}
}
printPrimeNumbers(100);


// print non prime numbers from 1 to 100
console.log(`\nprint non prime numbers from 1 to 100\n`);

function nonPrimeNumbers(n) {
    for (let i = 1; i <= n; i++) {
       let count =0;
       for (let j = 1; j <= n; j++) {
        if (i%j==0) {
            count++
        }
       }
       if (count != 2) {
        console.log(i);
       }
       count =0;

        
    }
}
nonPrimeNumbers(100)
