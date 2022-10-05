function time15minutes (input){
let hourT=Number (input[0])
let minutesT=Number (input[1]) +15

if (minutesT>=60) {
    hourT=hourT+1
    minutesT=minutesT%60
}

if (hourT>23) {
hourT=24%hourT
}
if (minutesT<10) {
    minutesT="0" + minutesT
}
console.log (`${hourT}:${minutesT}`)
}
time15minutes (["12", "45"])