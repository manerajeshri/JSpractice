
console.log(`\ mearging array`);

var array1=[1,2,3,4];
var array2 =["a","b","c","d"];

var mergedArray = Object.assign([],array1,...array2);
console.log(`Meerged array : `, mergedArray); // Meerged array :  (4) ['a', 'b', 'c', 'd']

// expected output ===> [1,2,3,4,"a","b","c","d"]