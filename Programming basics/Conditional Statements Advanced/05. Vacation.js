function vacation (input) {

    let budget=Number (input[0])
    let season= input[1]

    let accomodation=''
    let location=''
    let price=0

    if (budget<=1000) {if (season==="Summer") {
        accomodation="Camp"
        location="Alaska"
        price=budget*0.65
    }
    else {
        accomodation="Camp"
        location="Morocco"
        price=budget*0.45
    }
    }
    else if (budget>1000 && budget<=3000) { if (season==="Summer") {
        accomodation="Hut"
        location="Alaska"
        price=budget*0.8
}
else  {
        accomodation="Hut"
        location="Morocco"
        price=budget*0.6
}
    }
    else {if (season==="Summer") {
        accomodation="Hotel"
        location="Alaska"
        price=budget*0.9
    }
    else  {
        accomodation="Hotel"
        location="Morocco"
        price=budget*0.9
    }
    }
    console.log (`${location} - ${accomodation} - ${price.toFixed(2)}`)
}
vacation (["800", "Summer"])
vacation (["799.50","Winter"])
vacation (["3460","Summer"])
vacation (["1100","Summer"])
vacation (["5000","Winter"])
vacation (["2543.99","Winter"])