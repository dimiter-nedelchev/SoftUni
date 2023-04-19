
class Person {
     #pattern= /[a-zA-Z]+\s{1}[a-zA-Z]+/g
    constructor(firstName, lastName){
        this.firstName= firstName,
        this.lastName= lastName
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        if(this.#pattern.exec(fullName)){
            let [first, last]= fullName.split(' ');
            this.firstName= first
            this.lastName= last
        }
    }
}

let person = new Person("Peter", "Ivanov");

console.log(person.fullName); //Peter Ivanov

person.firstName = "George";

console.log(person.fullName); //George Ivanov

person.lastName = "Peterson";

console.log(person.fullName); //George Peterson

person.fullName = "Nikola Tesla";

console.log(person.firstName); //Nikola

console.log(person.lastName); //Tesla

console.log(Object.getOwnPropertyDescriptors(person))