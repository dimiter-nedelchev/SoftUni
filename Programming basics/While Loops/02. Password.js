function password (input) {
let index=0
let userName=input [index++]
let pass=input [index++]
let currentPass= input [index++]

while (currentPass!==pass) {
    currentPass=input [index++]
}
console.log (`Welcome ${userName}!`)
}
password (["Nakov","1234","Pass","1324","1234"])