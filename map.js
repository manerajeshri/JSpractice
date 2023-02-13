// creating map => const map =new Map();
console.log(`creating map => const map =new Map();`);

const map =new Map();
console.log(map);

// adding element to map in key value pair : map.set(1,"Raje");
console.log(`adding element to map in key value pair : map.set(1,"Raje");`);

map.set(1,"Angular");
console.log(map);
map.set("myName","Raje");
console.log(map);
map.set("Id",07);
console.log(map);
map.set(55,500055);
console.log(map);

// to get value using key
// console.log(map("Id"));

// size of map
console.log(`map.size is `, map.size);

// deleting element map.delete(key)
console.log(`deleting element map.delete(key)`);
map.delete(1) // map.delete(key)
console.log(map);

// finding element map.has(55) : we can chk by key 

console.log(`map.has(55) : we can chk by key `, map.has(55));
console.log(`map.has(500055)`, map.has(500055));
map.has("Id")
console.log(`map.has("Id")`, map.has("Id"));

// traversing over map ==> for of
console.log(`traversing over map ==> for of ==> `);

for (const iterator of map) {
    console.log(iterator);
}
// (2) ['myName', 'Raje']
// (2) ['Id', 7]
// (2) [55, 500055]

for (const iterator of map.keys()) {
    console.log(iterator);
}
// myName
// Id
// 55

for (const iterator of map.values()) {
    console.log(iterator);
}

// Raje
// 7
// 500055

console.log(` map.keys():`,  map.keys());
console.log(`map.values()`,map.values());


console.log(` key and mapNmae.get(key) ===>`);
for (const iterator of map.keys()) {
    console.log(`iterator : `, iterator);
    console.log(`map.get(iterator):`, map.get(iterator))
}





// // We can use the for of loop
// const allKeys = map_name.keys();
// for(const key of allKeys ) {
// console.log(map_name.get(key));
// }