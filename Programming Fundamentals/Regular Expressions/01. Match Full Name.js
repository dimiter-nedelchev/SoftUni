function matchFullName(input){

    let pattern= /\b[A-Z][a-z]+\ [A-Z][a-z]+\b/g;

    let names= pattern.exec(input)
    let nameArr= [];

    while(names){
        nameArr.push(names)
        names= pattern.exec(input)
    }

    nameArr= nameArr.join(' ')
    console.log(nameArr)
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");