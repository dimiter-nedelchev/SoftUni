function stop (input) {
let index=0
let command=input [index++] 

while (command!=="Stop") {
    console.log (command)
    command=input [index++]
}
}
stop (["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"])