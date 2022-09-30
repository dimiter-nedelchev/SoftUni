function foodDelivery (input) {
let chickenMenu=10.35;
let fishMenu=12.40;
let vegetarianMenu=8.15;

let chickenNumber=Number(input[0]);
let fishNumber=Number (input[1]);
let vegetarianNumber=Number (input[2]);

let priceTotal=(chickenMenu*chickenNumber) + (fishMenu*fishNumber) + (vegetarianMenu*vegetarianNumber);
let desertPrice=priceTotal*0.2;
let finalPrice=(priceTotal) + (desertPrice) + 2.50;

console.log (finalPrice);
}
foodDelivery (["2", "4", "3"]);