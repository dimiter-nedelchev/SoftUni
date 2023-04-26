function solve () {
    class Employee {
        constructor(name, age){
            this.name= name,
            this.age= age,
            this.salary= 0,
            this.dividend= 0
        }
        work () {
            console.log(`${this.name} ${this.tasks[this.currentTask]}`)
            this.currentTask++
            if(this.currentTask > this.tasks.length - 1){
                this.currentTask= 0;
            }
        }
        collectSalary () {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }
    }

    class Junior extends Employee {
        constructor(name, age){
            super(name, age);
            this.tasks= ['is working on a simple task.'];
            this.currentTask= 0;
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks= ['is working on a complicated task.', 'is taking time off work.', 'is supervising junior workers.'];
            this.currentTask= 0;
        }
    }

    class Manager extends Employee {
        constructor(name, age){
            super(name, age);
            this.divident= 0;
            this.tasks= ['scheduled a meeting.', 'is preparing a quarterly report.'];
            this.currentTask= 0;
        }
    }

    return {Employee, Manager, Junior, Senior}
}
const classes= solve();
const junior = new classes.Junior('Ivan',25);

junior.work();

junior.work();

junior.salary = 5811;

junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work(); 
sinior.work(); 
sinior.work(); 
sinior.work(); 
sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55); 
manager.salary = 15000; 
manager.collectSalary(); 
manager.dividend = 2500; 
manager.collectSalary();