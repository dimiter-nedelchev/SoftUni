function landscaping (input) {
let house1=Number(input[0]);
let TotalPrice=house1*7.61;
let Discount=TotalPrice*0.18;
let FinalPrice=TotalPrice - Discount;
console.log(`The final price is: ${FinalPrice} lv.`);
console.log(`The discount is: ${Discount} lv.`);
};
landscaping (["550"]);