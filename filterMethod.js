const array= [10,1,2,53,4,52,6,77,8,9];

const evenIndexedArray = array.filter((element,index )=> {
// console.log(`element : `,element,`index : `,index);
return index%2 === 0; // even indexed no
return index%2 !== 0; // odd indexed no
})


console.log(`even indexed no`,evenIndexedArray);
// console.log(`odd indexed no`,evenIndexedArray);


console.log(`to get even no from array`);
const evenArray= array.filter((element )=> {
    return element%2===0;
})

console.log(`even no from array : `,evenArray);