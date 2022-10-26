function salary (input) {
    index=0
    let tabs= Number (input[index++])
    let salary= Number (input[index++])

    let site=''

    for (i=1;i<=tabs;i++) {
        site= input[index++]

        if (site==="Facebook") {
            salary-= 150
        }
        else if (site==="Instagram") {
            salary-= 100
        }
        else if (site==="Reddit") {
            salary-= 50
        }

        if (salary<=0) {
            break;
        }
    }
    if (salary<=0) {
        console.log ("You have lost your salary.")
    }
    else {
        console.log (salary)
}
}
salary (["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"])
//salary (["3","500","Github.com","Stackoverflow.com","softuni.bg"])
