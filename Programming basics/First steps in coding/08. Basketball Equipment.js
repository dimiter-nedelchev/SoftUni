function basketballEquipment (input) {
let yearTax=Number(input[0]);

let sneakers=yearTax - (yearTax*0.4);
let jersey=sneakers - (sneakers*0.2);
let basketball=jersey/4;
let accessories=basketball/5;

let totalPrice=(yearTax) + (sneakers) + (jersey) + (basketball) + (accessories)
console.log (totalPrice);
}
basketballEquipment (["365"])