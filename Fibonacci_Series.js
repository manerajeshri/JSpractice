
// method 1 for loop
console.log(`method 1 for loop`);

function fibonacciSeries(number) {
 let n1 = 0,n2=1,nextTerm;
 console.log('Fibonacci Series:');
 for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm= n1 + n2;
    n1=n2;
    n2=nextTerm;    
 }
}
fibonacciSeries(7);


// method 2 do while loop 

let number = 7
console.log(`method 2 do while loop `);
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number+1) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}


