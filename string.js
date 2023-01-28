
// Ex:   input : hello all people.  Output : peo ( or any string you want)
console.log(`1. Write a js program to extract a number of characters from string.`);

let givenstring1 = "hello all people.";
console.log(`Given string is:${givenstring1}`);
console.log(`to extract a number of characters from string`,givenstring1.slice(6,9));


// Ex: Input : Mohit Sharma. Output : Mohit S.
console.log(`\n2. Write a js programe to convert a string in abbreviation form.`);
let givenstring2 = " Mohit Sharma.";
console.log(`Given string is:${givenstring2}`);
 let x = givenstring2.trim().split(" ");
    console.log(`string in abbreviation form : `,x[0],x[1].charAt(0));

// Ex :  Input: how are you? Output: How are you?
console.log(`\n3. write a function to capatalise the first letter of the string.`);
let givenstring3 = "how are you?";
console.log(`Given string is:${givenstring3}`);
console.log(givenstring3.charAt(0).toUpperCase()+givenstring3.slice(1,givenstring3.length-1));




console.log(`\n6] Given a string company = "Codemind Technology" 
a. Write a code to reverse only → Technology word`);

function reverseString(string) {
    console.log(`\nGiven string is : ${string}`);
    var tech = string.split(" ");
    // console.log(tech); //  (2) ['Codemind', 'Technology']
    // console.log(tech[1]); // Technology
    let reversedWord=[];
    for (let index = (tech[1].length) - 1; index >= 0; index--) {
        const element = (tech[1][index]);
        reversedWord= reversedWord + element;
    }
    // console.log(reversedWord); //ygolonhceT
    return tech[0] +" "+ reversedWord
}
console.log(`After Reverse   : ${reverseString("Codemind Technology")} `);