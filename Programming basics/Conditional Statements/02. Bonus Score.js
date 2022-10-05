function bonusPoints (input) {
let points=Number (input[0])


if (points>=0 && points<=100) {
    points=points+5
}
else if (points>100 && points<=1000) {
    points=points + (points*0.2)
}
else if (points>1000) {
    points=points + (points*0.1)
}

 if (Number (input [0])%2==0) {
    points=points+1
}
else if (Number (input [0])%5==0) {
    points=points+2
}
let bpoints=points - Number (input[0])
console.log (`${bpoints.toFixed(1)} ${points.toFixed(1)}`)

}
bonusPoints (["0"])