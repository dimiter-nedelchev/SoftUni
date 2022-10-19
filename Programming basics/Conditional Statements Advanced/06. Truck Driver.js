function truckDriver (input) {

    let season=input [0]
    let monthKm=Number (input[1])
    let totalKm=monthKm*4

    let salary=0

    if (season==="Spring" || season==="Autumn") {if (monthKm<=5000) {
        salary=totalKm*0.75
    }
    else if (monthKm>5000 && monthKm<=10000) {
        salary=totalKm*0.95
    }
    else if (monthKm>10000 && monthKm<=20000) {
        salary=totalKm*1.45
    }
    }
    else if (season==="Summer") {if (monthKm<=5000) {
        salary=totalKm*0.9
    }
    else if (monthKm>5000 && monthKm<=10000) {
        salary=totalKm*1.10
    }
    else if (monthKm>10000 && monthKm<=20000) {
        salary=totalKm*1.45
    }
    }
    else { if (monthKm<=5000) {
        salary=totalKm*1.05
    }
    else if (monthKm>5000 && monthKm<=10000) {
        salary=totalKm*1.25
    }
    else if (monthKm>10000 && monthKm<=20000) {
        salary=totalKm*1.45
    }
    }
    console.log((salary*0.9).toFixed(2))
}
truckDriver (["Summer","3455"])
truckDriver (["Winter","4350"])
truckDriver (["Spring","1600"])
truckDriver (["Winter","5678"])
truckDriver (["Autumn","8600"])
truckDriver (["Winter","16042"])
truckDriver (["Spring","16942"])