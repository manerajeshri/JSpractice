console.log(`1. The new Date() object gives the current date and time.`);
let currentDate = new Date();
console.log(currentDate);

console.log(`\n 2. The getDate() method returns the day from the specified date.`);
let day = currentDate.getDate();
console.log(day); // 26

console.log(`\n 3. The getMonth() method returns the month from the specified date.`);
let month = currentDate.getMonth() + 1;
console.log(month); // 8
//  1 is added to the getMonth() method because month starts from 0. 
//Hence, January is 0, February is 1, and so on.

console.log(`\n 5. The getFullYear() returns the year from the specified date.`);
let year = currentDate.getFullYear();
console.log(year); // 2020

