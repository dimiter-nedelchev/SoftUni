class Company{
    constructor(){
        this.departments= {};
    }
    addEmployee(name, salary, position, department){
        if(name && position && department && salary > 0){
            if(!this.departments.hasOwnProperty(department)){
            this.departments[department]= {
                [name]: {
                    salary,
                    position
                }
            }
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
        else{
            this.departments[department][name]= {
            salary,
            position
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
        }
        else{
            throw Error ('Invalid input!')
        }
    }
    bestDepartment(){
        for(let department in this.departments){
           this.departments[department].averageSalary= averageSalary(this.departments[department]);
        };
        
        function averageSalary(department){
            let totalSalary= 0;
            let length= 0;
        
            for(let employee in department){
                totalSalary+= department[employee].salary;
                length+= 1;
            }
            return (totalSalary / length).toFixed(2);
        }

        let bestDepartment= (Object.entries(this.departments).sort((a,b) => b[1].averageSalary - a[1].averageSalary)[0])
        const bestDepartmentName= bestDepartment[0];
        const bestAverageSalary= bestDepartment[1].averageSalary
        delete bestDepartment[1].averageSalary
        let employees= [];
        
        let sortedEmployees= Object.entries(bestDepartment[1]).sort((a, b) => b[1].salary - a[1].salary || a[0].localeCompare(b[0]));
        for(let employee of sortedEmployees){
            employees.push(`${employee[0]} ${employee[1].salary} ${employee[1].position}`);
        }
        return `Best Department is: ${bestDepartmentName}\nAverage salary: ${bestAverageSalary}\n${employees.join('\n')}`
    }
}



let c = new Company();

c.addEmployee('Stanimir', 1, 'engineer', 'Construction')
c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());