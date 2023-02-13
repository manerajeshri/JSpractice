// creating set 

const newSet = new Set();
console.log(newSet); // Set(0) {size: 0}

// adding element to set

newSet.add(1);
console.log(newSet);
newSet.add("Raj");
console.log(newSet);
newSet.add(7);
console.log(newSet);

// deleting element 

newSet.delete(1);
console.log(newSet);

// size of set
console.log(`newSet.size :`, newSet.size);

// finding element 
newSet.has("Raj");
console.log(`newSet.has("Raj")`,newSet.has("Raj"));
console.log(`newSet.has(11)`,newSet.has(11));


newSet.add(11);
newSet.add("RajeshriMane");
newSet.add(77);
console.log(newSet);

// To clear set
// newSet.clear();
// console.log(newSet); // Set(0) {size: 0}

// travesrsing set== > for of
console.log(`travesrsing set== > for of`);
for (const iterator of newSet) {
    console.log(iterator);
}

// to remove duplicate elements from array

const array =[1,2,3,1,2,3,7];

console.log(`array is :`,array,`\nafter removing duplicaye element from array`,[...new Set(array)]);


