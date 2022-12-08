function echoType (element) {


   // if (typeof element === "string" || typeof element === "number") {
    //     console.log(typeof element);
        //console.log(element);
   // }
   // else {
   //     console.log(typeof element);
   //     console.log('Parameter is not suitable for printing');
  //  }


  let output = typeof element==="string" || typeof element==="number" 
  ? element 
  : 'Parameter is not suitable for printing'; 

  console.log(typeof element);
  console.log(output);
}



//echoType('Hello, JavaScript!');
//echoType(18);
echoType(null);
