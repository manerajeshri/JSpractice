

// shallow clonning and deep clonning 
console.log(`shallow clonning and deep clonning `);


const empSunil ={
    name : "Sunil",
    age : 32,
    subject : {
        maths : 77,
        eng :99
    }
}

// shallow clonning / copy
console.log(`\nshallow clonning== > if we change one othr also changes`);
let empanil = empSunil;
console.log(empSunil);
console.log(empanil);
empanil.name ="Anil";
console.log(empSunil,empanil);

//partial deep clonning ==> 1] using spread operator ( ... )
console.log(`\n partial deep clonning ==> 1] using spread operator ( ... )`);

const empRaj = ({... empSunil});
console.log(`Sunil`,empSunil);
console.log(`Raj`, empRaj);

// changing raj name ==> correct
empRaj.name="Rajeshri";
console.log(empSunil, empRaj); // dosenr change sunil

// changing nested object marks== > fails for nested object
console.log(`empSunil.subject.eng`, empSunil.subject.eng, `empRaj.subject.eng`, empRaj.subject.eng);
empSunil.subject.eng = 75;
console.log(`empSunil.subject.eng`, empSunil.subject.eng);
console.log(`empSunil.subject.eng`, empSunil.subject.eng, `empRaj.subject.eng`, empRaj.subject.eng);

// deep clonning ==> 2] using JSON.parse(JSON.stringify( ))
console.log(`\ndeep clonning ==> 2] using JSON.parse(JSON.stringify( ))`);

const empAaradhya = JSON.parse(JSON.stringify(empSunil));
console.log(`empSunil.subject.eng`, empSunil.subject.eng, `empAaradhya.subject.eng`, empAaradhya.subject.eng);
empAaradhya.subject.eng =100 ;
console.log(`empSunil.subject.eng`, empSunil.subject.eng, `empAaradhya.subject.eng`, empAaradhya.subject.eng);














