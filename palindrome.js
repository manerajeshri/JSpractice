function IsPalindrome(givenString) {
    // var givenString ="madan";
// var givenString ="madam";
console.log(`Given   :`,givenString);
var stringSplit = givenString.split("");
// console.log(givenString.split(""));
// console.log(stringSplit);
var stringReverse = stringSplit.reverse();
// console.log(stringReverse);
var stringJoin = stringReverse.join("");
console.log(`Reverse :` ,stringJoin);

let result = givenString == stringJoin ? "Same : Palindrome" : "Not Same";

console.log(`Result  :`,result,`\n`);
}

IsPalindrome("madan");
IsPalindrome("madam");
IsPalindrome("mom")
IsPalindrome("tom")

// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
//     console.log(splitString);
 
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
 
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
    
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }
 
// // reverseString("madan");
// console.log(reverseString("madan"));