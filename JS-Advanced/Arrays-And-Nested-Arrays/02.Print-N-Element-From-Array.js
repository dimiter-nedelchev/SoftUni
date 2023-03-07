function printEveryNthElement(input, step) {
    let array= []
  
     for(let i = 0; i <= input.length -1; i+=step){
         array.push(input[i]);
     }
   return array
 }