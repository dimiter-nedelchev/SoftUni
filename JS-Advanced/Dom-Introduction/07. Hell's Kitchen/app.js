function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      
      let restaurants= JSON.parse(document.querySelector('#inputs textarea').value);
      const bestRestaurantElement= document.querySelector('div#bestRestaurant p');
      const bestWorkersElement= document.querySelector('div#workers p');
      let restaurantList= {};
      
    for(let restaurant of restaurants){
        let [name,...employeeList]= restaurant.split(' - ')
        if(!restaurantList.hasOwnProperty(name)){
         restaurantList[name]= {};
         restaurantList[name].employeeCount= 0;
        restaurantList[name].totalSalary= 0;
        restaurantList[name].bestSalary= 0;
     }
        
        for(let employee of employeeList){
            let currentEmployees= employee.split(', ');
         for(let current of currentEmployees){
            let[currentEmployee, salary]= current.split(' ')    
           restaurantList[name][currentEmployee]= Number(salary);
           restaurantList[name].employeeCount++
           restaurantList[name].totalSalary+= Number(salary);
           restaurantList[name].bestSalary= Math.max(restaurantList[name].bestSalary, Number(salary)).toFixed(2);
            }
        }
        restaurantList[name].averageSalary= Number((restaurantList[name].totalSalary/restaurantList[name].employeeCount)).toFixed(2);
     }
     
     let bestRestaurant= Object.entries(restaurantList).sort((a,b) => b[1].averageSalary - a[1].averageSalary).shift();
     let firstMessage= document.createElement('p');
     firstMessage.textContent= `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].averageSalary} Best Salary: ${bestRestaurant[1].bestSalary}`;
     bestRestaurantElement.appendChild(firstMessage);
     
     delete bestRestaurant[1].averageSalary;
     delete bestRestaurant[1].totalSalary;
     delete bestRestaurant[1].bestSalary;
     delete bestRestaurant[1].employeeCount;
     let message= '';

     let sortedEmployees= Object.entries(bestRestaurant[1]).sort((a,b) => b[1] - a[1]);
     for(let employee of sortedEmployees){
      message+= `Name: ${employee[0]} With Salary: ${employee[1]} `
     }
     
     let secondMessage= document.createElement('p');
     secondMessage.textContent= message;
     bestWorkersElement.appendChild(secondMessage);
}
}