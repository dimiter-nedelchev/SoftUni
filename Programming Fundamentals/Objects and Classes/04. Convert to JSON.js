function convertToJson(first, middle, last){

    let person= {
        name: first,
        lastName: middle,
        hairColor: last,
    }

    const newPerson= JSON.stringify(person)

   return newPerson
}
convertToJson('George', 'Jones','Brown');
convertToJson('Peter', 'Smith','Blond');