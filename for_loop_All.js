// Different Kinds of Loops
// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true



//for loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

// forEach
array.forEach(element => {
    
});

// for in
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
// The JavaScript for in statement loops through the properties of an Object:

// for of
for (const iterator of object) {
    
}
//The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
