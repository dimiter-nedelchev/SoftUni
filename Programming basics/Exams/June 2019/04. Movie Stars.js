function movieStars (input) {

    let index=0;
    let budget=Number(input[index++]);

    let actor="";
    let salary=0;

    let command=input[index++];

    while(command!="ACTION") {
        actor=command;
        
        
        
        if (actor.length>15) {
            salary=0.2*budget;
            
            if (salary>budget) {
                console.log(`We need ${(salary-budget).toFixed(2)} leva for our actors.`)
                break;
            }
            else {
                budget-= salary;
            }
        }

        else {
            salary=Number(input[index++]);
            if (salary>budget) {
                console.log(`We need ${(salary-budget).toFixed(2)} leva for our actors.`)
                break;
            }
            else {
            budget-= salary;
            }
        }

        command=input[index++];

        if (command==="ACTION") {
            console.log(`We are left with ${budget.toFixed(2)} leva.`)
            break;
        }
        
    }
}
movieStars (["90000","Christian Bale","70000.50","Leonard DiCaprio","Kevin Spacey","24000.99"])
movieStars (["170000","Ben Affleck","40000.50","Zahari Baharov","80000","Tom Hanks","2000.99","ACTION"])
