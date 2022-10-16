function numbers (input) {

    let num1=Number (input[0])
    let num2=Number (input[1])
    let operator= input[2]

    result=0
    numValue=''

    if (operator=== "+" || operator==="-" || operator==="*") { 
        if (operator=== "+") { 
            result=num1+num2
    }
    else if (operator==="-") {
        result=num1-num2
    }
    else if (operator==="*") {
        result=num1*num2
    }    
    if (result%2==0) {
        numValue="even"
    }
    else {
        numValue="odd"
    }
    console.log (`${num1} ${operator} ${num2} = ${result} - ${numValue}`)
    }

    else if (operator==="/") {if(num2!=0) {
        result=num1/num2
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`)
    }
    else {
        console.log (`Cannot divide ${num1} by zero`)
    }
}
    else if (operator==="%") {if (num2!=0)
    {
        result=num1%num2
        console.log (`${num1} % ${num2} = ${result}`)
    }
    else {
        console.log (`Cannot divide ${num1} by zero`)
    }
    }

}
numbers (["10","12","+"])
//numbers (["123","12","/"])
//numbers (["112","0","/"])
numbers (["10","1","-"])
//numbers (["10","3","%"])
//numbers (["10","0","%"])

