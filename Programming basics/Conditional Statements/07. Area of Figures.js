function areaOfFigures (input) {
    let figure=input [0]
    let sidea=Number (input[1])
    let sideb=Number (input[2])
    
if (figure=="square") {
    area=sidea*sidea
}
else if (figure=="rectangle") {
    area=sidea*sideb
}
else if (figure=="circle") {
    area=Math.PI*sidea*sidea
}
else if (figure=="triangle") {
    area=((sidea*sideb)/2)
}
console.log (area.toFixed(3))
}
areaOfFigures (["circle", "6", ""])