function series (input) {

    let index=0
    let budget=Number(input[index++])
    let seriesNum=Number(input[index++])

    let seriesPr=0
    let series=''
    let total=0

    for (i=1;i<=seriesNum;i++) {
        series=input[index++]
        seriesPr=Number(input[index++])

        if (series==="Lucifer") {
            seriesPr=seriesPr*0.6
        }
        else if (series==="Thrones") {
            seriesPr=seriesPr*0.5
        }
        else if (series==="Protector") {
            seriesPr=seriesPr*0.7
        }
        else if (series==="TotalDrama") {
            seriesPr=seriesPr*0.8
        }
        else if (series==="Area") {
            seriesPr=seriesPr*0.9
        }

        total+= seriesPr
    }
    if (budget>=total) {
        console.log (`You bought all the series and left with ${(budget-total).toFixed(2)} lv.`)
    }
    else {
        console.log (`You need ${(total-budget).toFixed(2)} lv. more to buy the series!`)
    }
}
//series (["10","3","Thrones","5","Riverdale","5","Gotham","2"])
series (["25","6","Teen Wolf","8","Protector","5","TotalDrama","5","Area","4","Thrones","5","Lucifer","9"])
