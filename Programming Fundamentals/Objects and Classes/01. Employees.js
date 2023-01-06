function employees(input){

    let person= {}

    input.forEach((name) => {
        person[name]= name.length
    }
    )
    for(const key in person){
        console.log(`Name: ${key} -- Personal Number: ${person[key]}`)
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    );