class Person {
    constructor(firstName,lastName,age,email){
        this.firstName= firstName,
        this.lastName= lastName,
        this.age= age,
        this.email= email
    }
    toString(){
        return `${this.firstName} ${this.lastName} (agr: ${this.age}, email: ${this.email})`;
    }
}