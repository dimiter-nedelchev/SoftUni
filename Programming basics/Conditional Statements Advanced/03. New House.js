function flowers (input) {

    let type=input [0]
    let flowerN=Number (input[1])
    let budget=Number (input[2])

    price=0

    if (type==="Roses") {
        price=flowerN*5
        if (flowerN>80){
            price=price*0.9
        }
        else {
            price=price
        }
    }
    else if (type==="Dahlias") {
        price=flowerN*3.8
        if (flowerN>90) {
            price=price*0.85
        }
        else {
            price=price
        }
    }
    else if (type==="Tulips") {
        price=flowerN*2.80
        if (flowerN>80) {
            price=price*0.85
        }
        else {
            price=price
        }
    }
    else if (type==="Narcissus") {
        price=flowerN*3
        if (flowerN<120) {
            price=price*1.15
        }
        else {
            price=price
        }
    }
    else if (type==="Gladiolus") {
        price=flowerN*2.50
        if (flowerN<80) {
            price=price*1.2
        }
        else {
            price=price
        }
    }
    if (price<=budget) {
        console.log (`Hey, you have a great garden with ${flowerN} ${type} and ${(budget-price).toFixed(2)} leva left.`)
    }
    else {
        console.log (`Not enough money, you need ${(price-budget).toFixed(2)} leva more.`)
    }
}
//flowers (["Roses","55","250"])
//flowers (["Tulips","88","260"])
flowers (["Narcissus","119","360"])

