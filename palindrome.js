// function IsPalindrome(givenString) {
    
// console.log(`Given   :`,givenString);
// var stringSplit = givenString.split("");
// var stringReverse = stringSplit.reverse();
// var stringJoin = stringReverse.join("");
// console.log(`Reverse :` ,stringJoin);

// let result = givenString == stringJoin ? "Same : Palindrome" : "Not Same";

// console.log(`Result  :`,result,`\n`);
// }

// IsPalindrome("madan");
// IsPalindrome("madam");
// IsPalindrome("mom")
// IsPalindrome("tom")

// chain 

function Is_Palindrome(givenString) {
        
    return  givenString.trim().toLowerCase() === givenString.trim().toLowerCase().split("").reverse().join("") ? `"${givenString}" is Palindrome` : `"${givenString}" is Not Palindrome`;
    
    }
    
    console.log(Is_Palindrome("madan")); 
    console.log(Is_Palindrome("Madam")); // dealing with capital small letters
    console.log(Is_Palindrome("maDaM"));
    
    console.log(Is_Palindrome("   mom madam mom  ")); // removing spaces
    console.log(Is_Palindrome("I love India"));

