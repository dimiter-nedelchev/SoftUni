function listOfNames(array){

    let result= array.sort((a,b) => a.localeCompare(b)).map((el, index) => `${index + 1}.${el}` )
    console.log(result.join('\n'))

}
listOfNames(["John", "Bob", "Christina", "Ema"])