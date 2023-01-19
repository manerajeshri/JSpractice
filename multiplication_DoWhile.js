

let result = 0;
let counter =0;
function operation (num1, num2) {
      let newNum1 = Math.abs(num1);
      let newNum2 = Math.abs(num2);
      if(num1<=0 && num2<=0){
        do {
          result = result+newNum1;
          counter++;
    
        } while (counter<newNum2);
        return result;

      }
      else{
   
      do {
      result = result+newNum1;
      counter++;

    } while (counter<newNum2);

     
    return (num1<0 || num2<0)  ? -result : result;
  }
}

//  let finalResult = operation(7,8);
 console.log(`operation(0,8) = `,operation(0,8)); // 0
 console.log(`operation(7,0) =`,operation(7,0)); // 7 *******************************************
//  console.log(`operation(-7,-8) =`,operation(-7,-8)); // 56
//  console.log(`operation(-7,8) =`,operation(-7,8)); // -56
//  console.log(`operation(7,-8) =`,operation(7,-8)); // -56
//  console.log(`operation(7,8) =`,operation(7,8));  //56
