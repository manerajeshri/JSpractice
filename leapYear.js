

// leap year
//A year is a leap year if the following conditions are satisfied:

// The year is a multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.

function IsLeapYear(year) {

return (year%4 == 0  || year%100 == 0 || year%400 == 0) ? "Leap Year" : "Not a Leap Year" ;
}
console.log(`Year 2014 is `,IsLeapYear(2014)); console.log(`Year 2020 is `,IsLeapYear(2020));
console.log(`Year 2017 is `,IsLeapYear(2017)); console.log(`Year 2022 is `,IsLeapYear(2022));
console.log(`Year 2000 is `,IsLeapYear(2000)); console.log(`Year 2004 is `,IsLeapYear(2004));
console.log(`Year 1996 is `,IsLeapYear(1996)); console.log(`Year 1999 is `,IsLeapYear(1999));


function IsLeapYear1(year) {

    return (year%4 == 0  || (year%400 == 0 && year%100 !== 0 ) ) ? "Leap Year" : "Not a Leap Year" ;
    }
    console.log(`\nYear 2014 is `,IsLeapYear1(2014)); console.log(`Year 2020 is `,IsLeapYear1(2020));
    console.log(`Year 2017 is `,IsLeapYear1(2017)); console.log(`Year 2022 is `,IsLeapYear1(2022));
    console.log(`Year 2000 is `,IsLeapYear1(2000)); console.log(`Year 2004 is `,IsLeapYear1(2004));
    console.log(`Year 1996 is `,IsLeapYear1(1996)); console.log(`Year 1999 is `,IsLeapYear1(1999));