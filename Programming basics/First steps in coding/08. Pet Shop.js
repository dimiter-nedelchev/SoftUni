function petShop (input) {
let dogFoodPrice=2.50;
let catFoodPrice=4.00;
let expenses=(dogFoodPrice*Number (input[0])) + (catFoodPrice*Number (input [1]));
console.log (`${expenses} lv.`)
}
petShop (["10", "20"])