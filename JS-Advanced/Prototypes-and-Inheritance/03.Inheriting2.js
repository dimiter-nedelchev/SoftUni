

function Person (name, email){
    this.name= name,
    this.email= email
}

Person.prototype.toString= function () {
    let value= [];
    for(let key in this){
        value.push(`${key}: ${this[key]}`)
    }
    value.pop();
    return `${this.constructor.name} (${value.join(', ')})`
}

function Teacher(name, email, subject){
    Person.call(this, name, email)
    this.subject= subject
}

function Student(name, email, course){
    Person.call(this, name, email)
    this.course= course
}


let bonev= new Teacher('Bonev', 'bonev@gmail.com', 'History');
console.log(bonev instanceof Teacher);
console.log(bonev.toString());
let kocha= new Student('Kocha', 'Kocha@gmail.com', 'Geography');

Student.prototype= Object.create(Person.prototype);
Teacher.prototype= Object.create(Person.prototype);

return {
    Person,
    Teacher,
    Student
}