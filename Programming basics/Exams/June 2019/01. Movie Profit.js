function movieProfit(input) {

    let name=input[0];
    let days=Number(input[1]);
    let tickets=Number(input[2]);
    let price=Number(input[3]);
    let discount=Number(input[4]);

    let totalTickets=days*tickets;
    let totalPr=totalTickets*price;

    discount=discount/100;

    totalPr=totalPr-(totalPr*discount);

    console.log(`The profit from the movie ${name} is ${totalPr.toFixed(2)} lv.`);
}
movieProfit (["The Programmer",
"20",
"500",
"7.50",
"7"])

movieProfit (["Python Basics",
"40",
"34785",
"10.45",
"14"])
