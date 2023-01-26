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
let sum =0;
response.keys.forEach(element => {
    sum = sum + (response[element].count);
});
console.log(`sum of all count = ${sum}` );
//===========================================================================
  let sum1 = 0
        for (let i = 0; i < response.keys.length; i++) {
            let x = response[response.keys[i]].count
                sum1 = sum1 + x;
            }  
console.log(`sum of all count is = ${sum1}`);

