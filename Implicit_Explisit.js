let result;

// numeric string with + gives string type

console.log(`1] numeric string with + gives string type`);

result = '3' + 2 ;
console.log(result);

result = '3' + true ;
console.log(result);

result = '3' + undefined ;
console.log(result);

result = '3' + null ;
console.log(result);

console.log(`\n2] if boolean used true is 1 false is 0`);

result = '4' - null ;
console.log(result);

result = 4 + true ;
console.log(result);

result = 4 + false ;
console.log(result);

// numeric string used with - , / , * result number

result = '4' - '2';
console.log(result);

result = '4' - 2;
console.log(result);

result = '4' * '2';
console.log(result);

result = '4' / '2';
console.log(result);
 
// arithmetic operation of undefined with number , boolaen or null gives NaN

result = 4 + undefined;
console.log(result);

result = 4 - undefined;
console.log(result);

result = true + undefined;
console.log(result);

result = null + undefined;
console.log(result);




















