function books (input){
let pages=Number (input[0]);
let pagesPerDay=Number (input[1]);
let days=Number (input[2]);
let totalTime=pages/pagesPerDay;
let hoursPerDay=totalTime/days;
console.log(hoursPerDay);
}
books(["212", "20", "2"])