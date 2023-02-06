

const array =[11,2,3,4,5,6,7,8,9,10];
console.log(`even positioned value`);
array.filter((value,index,array )=>{
// console.log(value,index);

if (index%2==0) {
    console.log(value);
}
})

console.log(`\n Even numbers`);

array.filter((value)=>{
    if (value%2==0) {
        console.log(value);
    }
})

