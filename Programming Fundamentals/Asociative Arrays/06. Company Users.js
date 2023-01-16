function companyUsers (input){

    companies= {};

    input.forEach(company => {
        const [companyName, id] = company.split(' -> ');

       if(companies[companyName]){
        if(!companies[companyName].includes(id))
        companies[companyName]+= ` ${id}`
       }
       else{
        companies[companyName]= id;
       }
    })
        
    let companyList= Object.entries(companies)
    companyList.sort((a,b) => (a[0]).localeCompare(b[0]))

    companyList.forEach(company => {
        console.log(`${company[0]}`)
        const employees= company[1].split(' ');

        for(const employee of employees){
            console.log(`-- ${employee}`)
        }
    })
}
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ]);