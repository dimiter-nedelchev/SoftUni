function repainting (input) {
let nylon=Number (input[0]) +2;
let paint=Number (input[1]) + Number (input[1])*0.1;
let diluent=Number (input[2]);
let time=Number (input[3]);
let priceMaterials= (nylon*1.5) + (paint*14.5) + (diluent*5) +0.4;
let wagePerHour=priceMaterials*0.3;
let wage=wagePerHour*time;
let totalPrice=wage+priceMaterials;
console.log(totalPrice);
}
repainting (["10", "11", "4", "8"]);