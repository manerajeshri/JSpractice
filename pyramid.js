// https://www.tutorialstonight.com/js/javascript-star-pattern


console.log(`1] pyramid of star`);
let string =" ";
for (let index = 5; index >0; index--) {// no of lines count == row count
  string += "*"
  console.log(string);
}




// pyramid of star
// console.log(`1] pyramid of star`);
// let string =" ";
// for (let index = 0; index < 5; index++) {// no of lines
//   string += "*"
//   console.log(string);
// }

// console.log(`2] pyramid of star`);
// let string1 =" ";
// let array =[ , , , , ,"*" ];
// let n=5;
// for (let index = 0; index < n; index++) {
// // for (let index = 0; index < n; index++) {
//    array[index].concat(*) 
//    console.log(array[index]);
  
// }
// }















// function renderPyramid(n) {
//     for (var i = 0; i < n; i++) {
//       var str = '';
//       for (var j = 1; j < n-i; j++) {
//         str = str + ' ';
//       }
//       for (var k = 1; k <= (2*i+1); k++) {
//         str = str + '*';
//       }
//       console.log(str);
//     }
//   }
//   renderPyramid(10)

// function getPyramid(param) {

  
//     for (var i = 1; i <= param; i++) {
// var output = "";
//       for (var j = 1; j <= i; j++) {
//         output += j + "     ";
//       }
//       console.log(output);
//       output = "";
//     }

//   }
// getPyramid('10')