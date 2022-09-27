function project (input) {
let name=input[0];
let projectNumber=Number(input [1]);
let projectTime=projectNumber*3;
console.log (`The architect ${name} will need ${projectTime} hours to complete ${projectNumber} project/s.`)
}
project (["Peter", "4"]);