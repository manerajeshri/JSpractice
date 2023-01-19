// // take input from the user
// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);

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

function getPyramid(param) {

  
    for (var i = 1; i <= param; i++) {
var output = "";
      for (var j = 1; j <= i; j++) {
        output += j + "     ";
      }
      console.log(output);
      output = "";
    }

  }
getPyramid('10')