function sumNumbers (input) {

    let index=0
    let number=Number (input [index++])
    let sum=0
    let num=Number (input[index++])

    while (sum<number) {
        sum += num
        num=Number (input[index++])
    } 
    console.log (sum)
}
sumNumbers (["100", "10", "20", "30", "40"])
sumNumbers (["20", "1", "2", "3", "4", "5", "6"])