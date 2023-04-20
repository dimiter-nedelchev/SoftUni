function inheritToString (){

    class Person {
        constructor(name, email){
            this.name= name,
            this.email= email
        };
        toString(){
            let value= [];
            for(let key in this){
                value.push(`${key}: ${this[key]}`)
            };
            return `${this.constructor.name} (${value.join(', ')})`;
        };
    };
    
    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email)
            this.subject= subject
        };
    };
    
    class Student extends Person {
        constructor(name, email, course){
            super(name, email)
            this.course= course
        };
    };
    
    let bonev= new Student('Bonev', 'Bonev.com', 'History')
    console.log(bonev.toString())
    return {
        Person,
        Teacher,
        Student
    }
}
inheritToString();