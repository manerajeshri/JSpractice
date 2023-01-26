// One of our friend asked this question in interview can you guys, please give a try.
//Ques:  Add all the count values in response using for loop and console the sum as output.

const response = {
  maran: {
    count: 1,
  },
  gas: {
    count: 2,
  },
  prelude: { 
    count: 5,
  },
  keys: ['maran', 'gas','prelude'],
};

//==============================================================================
console.log(`\n 1] Using forEach`);
let sum =0;
response.keys.forEach(element => {
    sum = sum + (response[element].count);
});
console.log(`sum of all count = ${sum}` );
//===========================================================================
console.log(`\n 2] Using for`);
  let sum1 = 0
        for (let i = 0; i < response.keys.length; i++) {
            let x = response[response.keys[i]].count
                sum1 = sum1 + x;
            }  
console.log(`sum of all count is = ${sum1}`);
//===============================================================================
console.log(`\n 3] Using for of`);

var sum2=0 ;
for (const i of response.keys) {
    sum2 = sum2 + (response[i].count);
}
console.log(`sum of all count = ${sum2}` );

//===============================================================================
console.log(`\n 4] Using for in`);
let sum3 =0;
for (const key in response.keys) {
 
    sum3 += response[response.keys[key]].count;
    
}
console.log(`sum of all count = ${sum3}` );