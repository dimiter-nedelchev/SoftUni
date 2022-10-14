function cinema (input) {

    let type=input [0]
    let rows=Number (input[1])
    let cols=Number (input[2])

    let area=rows*cols
    price=0

    if (type==="Premiere") {
        price=area*12
    }
    else if (type==="Normal") {
        price=area*7.5
    }
    else {
        price=area*5
    }
    console.log (`${price.toFixed(2)} leva` )
}
cinema (["Premiere","10","12"])
cinema  (["Normal","21","13"])
cinema  (["Discount","12","30"])
