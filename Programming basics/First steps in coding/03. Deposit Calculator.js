function deposit (input) {
let deposit=Number(input [0]);
let depositTime=Number (input[1]);
let depositPercent=Number (input[2])/100;
let depositSum=deposit+depositTime*((deposit*depositPercent)/12);
console.log(depositSum);
}
deposit (["600", "1","50"]);