
// Object.assign()
console.log(`Object.assign()`);
// creating object

const emp1 = {
    name: "RAj",
    age: 32,
}

const emp2 ={
    city : "pune",
    country : "india"
}

//1 clonning object==>  let clonedEmp= Object.assign({},emp ) 
console.log(`1 clonning object==>  let clonedEmp= Object.assign({},emp ) `);
let clonedEmp= Object.assign({},emp1 ) ;
console.log(`original object : emp1 :: `,emp1);
console.log(`cloned object : clonedEmp :: `,clonedEmp);

// 2 Mearge objects ==> let meargeObject = Object.assign({},emp1,emp2)
console.log(`\n2 Mearge objects ==> let meargeObject = Object.assign({},emp1,emp2)`);
console.log(`original object : emp1 and emp2 :: `,emp1,'and',emp2);
let meargeObject = Object.assign({},emp1,emp2);
console.log(`meargeObject`,meargeObject); 


// 3  clonning array
console.log(`\n3  clonning array`);
const array=[1,2,3,4];
const clonnedArray= Object.assign([],array);
console.log(`array`,array);
console.log(`clonned array`,clonnedArray);


// 4 mearging array
const array2 =["a","b","c","d"];
console.log(`\n4 mearging array`);
const mergedArray = Object.assign([],array,...array2);
console.log(`Meerged array : `, mergedArray);