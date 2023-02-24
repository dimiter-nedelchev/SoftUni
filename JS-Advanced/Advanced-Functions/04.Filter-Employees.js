function filterEmployees(data,criteria){

    let employeeList= JSON.parse(data);
    let filteredEmployees= [];
    let employeeProperty='';
    let employeeValue='';
    
    if(criteria !== 'all'){
        [employeeProperty, employeeValue]= criteria.split('-');
    }
    else{
        for(let currentEmployee of employeeList){
                let metCriteria= `${currentEmployee.first_name} ${currentEmployee.last_name} - ${currentEmployee.email}`;
                filteredEmployees.push(metCriteria);
        }
    }

    for(let currentEmployee of employeeList){
        for(let key in currentEmployee){
            if(currentEmployee[key] === employeeValue){
                let metCriteria= `${currentEmployee.first_name} ${currentEmployee.last_name} - ${currentEmployee.email}`;
                filteredEmployees.push(metCriteria);
            }
        }
    }
    for(let i= 0; i <= filteredEmployees.length - 1; i++){
        console.log(`${i}. ${filteredEmployees[i]}`);
    }
}
filterEmployees(`[{

    "id": "1",
    
    "first_name": "Kaylee",
    
    "last_name": "Johnson",
    
    "email": "k0@cnn.com",
    
    "gender": "Female"
    
    }, {"id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" }, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`, 'all')