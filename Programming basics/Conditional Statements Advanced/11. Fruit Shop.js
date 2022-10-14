function fruitShop (input) {

    let fruit=input [0]
    let day=input [1]
    let amount=Number (input[2])
    let price=0

if (day==="Monday"|| day==="Tuesday" || day==="Wednesday" || day==="Thursday" || day==="Friday")
{if (fruit==="banana") {
    price=amount*2.5
}
if (fruit==="apple") {
    price=amount*1.20
}
if (fruit==="orange") {
    price=amount*0.85
}
if (fruit==="grapefruit") {
    price=amount*1.45
}
if (fruit==="kiwi") {
    price=amount*2.70
}
if (fruit==="pineapple") {
    price=amount*5.50
}
if (fruit==="grapes") {
    price=amount*3.85
}
else {
    console.log ("error")
}
}

else if (day==="Saturday" || day==="Sunday") {
    if (fruit==="banana") {
        price=amount*2.70
    }
    if (fruit==="apple") {
        price=amount*1.25
    }
    if (fruit==="orange") {
        price=amount*0.90
    }
    if (fruit==="grapefruit") {
        price=amount*1.60
    }
    if (fruit==="kiwi") {
        price=amount*3.00
    }
    if (fruit==="pineapple") {
        price=amount*5.60
    }
    if (fruit==="grapes") {
        price=amount*4.20
    }
    else {
        console.log ("error")
    }
}

console.log (price.toFixed(2))
}


//fruitShop (["apple","Tuesday","2"])
//fruitShop (["orange","Sunday","3"])
//fruitShop (["kiwi","Monday","2.5"])
//fruitShop (["gapes","Saturday","0.5"])
//fruitShop (["tomato","onday","0.5"])

