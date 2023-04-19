function teacher(){

function Person (name, email){
    this.name= name,
    this.email= email
}

function Teacher(name, email, subject){
    Person.call(this, name, email)
    this.subject= subject
}

let bonev= new Teacher('Bonev', 'bonev@gmail.com', 'History');
console.log(bonev)
return {
    Person,
    Teacher
}
}
teacher();