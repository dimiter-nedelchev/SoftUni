function studymaterials (input) {
let pricePen=5.8;
let priceMarker=7.2;
let priceChemical=1.2;
let discount=Number (input[3])/100;
let penAmount=Number (input[0]);
let markerAmount=Number (input[1]);
let chemicalAmount=Number (input[2]);
let totalPrice=(pricePen*penAmount) + (priceMarker*markerAmount) + (priceChemical*chemicalAmount)
let PriceAfterDiscount=totalPrice - (totalPrice*discount);
console.log(PriceAfterDiscount);
}
studymaterials (["2", "3", "4", "25"]);