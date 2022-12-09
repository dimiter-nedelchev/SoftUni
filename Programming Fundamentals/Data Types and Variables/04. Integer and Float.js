function integerOrFloat(num1,num2,num3) {

    let sum = num1 + num2 + num3;

   let output = Number.isInteger(sum) 
   ? "Integer"
   : "Float";

   console.log(`${sum} - ${output}`)

}
integerOrFloat(9, 100, 1.1);
integerOrFloat(100, 200, 303);
