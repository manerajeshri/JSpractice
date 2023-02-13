// Program to remove duplicates from array [5, 6, 7, 34, 23, 6, 7, 89]

const array = [5, 6, 7, 34, 23, 6, 7, 89];

const arrayNew = [... new Set(array)];
console.log(array);
console.log(arrayNew);
console.log(... new Set(array));