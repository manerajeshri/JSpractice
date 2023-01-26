//shallow cloning:
     //when a one reference variable is copied into anotheer reference variable using = assignment operator 
     //then shallow copy of object is created.
//When we change or update the property in one object it will also get change in other object.
// it works for nested also

     let Anil = {
        age : 23,
        name : "Anil",
        company :"Microsoft",
        marks : {
                    science : 70,
                    maths : 90,
                    english : 87
                }
     }

     let Sunil = Anil;  //shallow cloning

     console.log(`Anil : `,Anil);
     console.log(`Sunil : `,Sunil);
     
     Sunil.age=30;
     console.log(`Anil : `,Anil);
     console.log(`Sunil : `,Sunil);

     Anil.marks.english = 35;
     console.log(Anil.marks);
     console.log(Sunil.marks);



     //Deep cloning
     //It makes the copy of an original reference variable.
     //we can achieve deep cloning in two ways: 1. Spread operator 2.JSON.parse


    //  let empSumit = {
    //     empName : "Sumit",
    //     empSalary : "70K"

    //  }
 
    //  let empAbhi = {...empSumit};
    //  console.log(empSumit);
    //  console.log(empAbhi);
    //  console.log(``);
    //  empAbhi.empName = "Abhishek";
    //  console.log(empSumit);
    //  console.log(empAbhi);
    //  empSumit.empSalary="90K";
    //  console.log(``);
    //  console.log(empSumit);
    //  console.log(empAbhi);

        // const empStew = {
        //     name: "Stew Jobs",
        //     age: 50,
        //     marks : {
        //         science : 70,
        //         maths : 90,
        //         english : 87
        //     }
        // }

        // const empBill = {...empStew};
        // console.log(empStew);
        // console.log(empStew.marks);
        // console.log(empBill);
        // console.log(empBill.marks);

        // empBill.name = "Bill Gates";
        // console.log(empStew);
        // console.log(empBill);
        // empStew.marks.maths = 75;
        // console.log(empStew.marks);
        // console.log(empBill.marks);
        //If the object is not nested we use spread operator but if the object is nested object at that time spread operator fails.
        //So we use JSON.parse(JSON.stringify()).


        // const empStew = {
        //     name: "Stew Jobs",
        //     age: 50,
        //     marks : {
        //         science : 70,
        //         maths : 90,
        //         english : 87
        //     }
        // }

        // const empBill = JSON.parse(JSON.stringify(empStew));
        //  console.log(empStew);
        // console.log(empStew.marks);
        // console.log(empBill);
        // console.log(empBill.marks);

        // console.log(``);
        //     empBill.marks.english=95;
        //     console.log(empStew.marks);
        //     console.log(empBill.marks);
 //  empSumit.empSalary="90K";
    //  console.log(``);
    //  console.log(empSumit);
    //  console.log(empAbhi);

        // const empStew = {
        //     name: "Stew Jobs",
        //     age: 50,
        //     marks : {
        //         science : 70,
        //         maths : 90,
        //         english : 87
        //     }
        // }

        // const empBill = {...empStew};
        // console.log(empStew);
        // console.log(empStew.marks);
        // console.log(empBill);
        // console.log(empBill.marks);

        // empBill.name = "Bill Gates";
        // console.log(empStew);
        // console.log(empBill);
        // empStew.marks.maths = 75;
        // console.log(empStew.marks);
        // console.log(empBill.marks);
        //If the object is not nested we use spread operator but if the object is nested object at that time spread operator fails.
 //So we use JSON.parse(JSON.stringify()).


        // const empStew = {
        //     name: "Stew Jobs",
        //     age: 50,
        //     marks : {
        //         science : 70,
        //         maths : 90,
        //         english : 87
        //     }
        // }

        // const empBill = JSON.parse(JSON.stringify(empStew));
        //  console.log(empStew);
        // console.log(empStew.marks);
        // console.log(empBill);
        // console.log(empBill.marks);

        // console.log(``);
        //     empBill.marks.english=95;
        //     console.log(empStew.marks);
        //     console.log(empBill.marks);