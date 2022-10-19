function schoolCamp (input) {

    let season=input [0]
    let group=input [1]
    let studentN=Number (input[2])
    let nights=Number (input[3])

    let price=0
    let sport=''
    if (group==="boys" || group==="girls") {if (season==="Winter") {
        price=(nights*9.6)*studentN
    }
    else if (season==="Spring") {
        price=(nights*7.2)*studentN
    }
    else {
        price=(nights*15)*studentN
    }
    if (studentN>50) {
        price=price*0.5
    }
    else if (studentN>=20 && studentN<50) {
        price=price*0.85
    }
    else if  (studentN>=10 && studentN<20) {
        price=price*0.95
    }
    }

    if (group==="mixed") {if (season==="Winter") {
        price=(nights*10)*studentN
    }
    else if (season==="Spring") {
        price=(nights*9.50)*studentN
    }
    else {
        price=(nights*20)*studentN
    }
    if (studentN>50) {
        price=price*0.5
    }
    else if (studentN>=20 && studentN<50) {
        price=price*0.85
    }
    else if (studentN>=10 && studentN<20) {
        price=price*0.95
    }
    }
    if (group==="boys") {if(season==="Winter") {
        sport="Judo"
    }
    else if (season==="Spring") {
        sport="Tennis"
    }
    else {
        sport="Football"
    }
    }
    else if (group==="girls") {if (season==="Winter") {
        sport="Gymnastics"
    }
    else if (season==="Spring") {
        sport="Athletics"
    }
    else {
        sport="Volleyball"
    }
    }
    else if (group==="mixed") {if (season==="Winter") {
        sport="Ski"
    }
    else if (season==="Spring") {
        sport="Cycling"
    }
    else {
        sport="Swimming"
    }
    }
    console.log (`${sport} ${price.toFixed(2)} lv.`)
}
schoolCamp (["Spring","girls","20","7"])
schoolCamp (["Winter","mixed","9","15"])
schoolCamp (["Summer","boys","60","7"])
schoolCamp (["Spring","mixed","17","14"])