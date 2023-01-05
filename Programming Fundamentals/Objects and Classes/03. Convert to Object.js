function convertToObject(input){

    let person= JSON.parse(input);

   for(let keys of Object.keys(person)){
        console.log(`${keys}: ${person[keys]}`)
   }

}
//convertToObject({"name": "George", "age": 40, "town": "Sofia"});
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');