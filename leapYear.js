


function leapYear(year) {

return (year%4 == 0  || year%100 == 0 || year%400 == 0) ? "Leap Year" : "Not a Leap Year" ;

}

console.log(`Year 2014 is `,leapYear(2014));
console.log(`Year 2020 is `,leapYear(2020));
console.log(`Year 2017 is `,leapYear(2017));
console.log(`Year 2022 is `,leapYear(2022));
console.log(`Year 2000 is `,leapYear(2000));
console.log(`Year 1996 is `,leapYear(1996));
