function shopping (input) {
let budget=Number (input [0])
let gpus=Number (input[1])
let processors=Number (input[2])
let ram=Number (input[3])

let gpusPr=gpus*250
let processorsPr= processors * (0.35*gpusPr)
let ramPr=ram*(0.1*gpusPr)

finalPr=gpusPr + processorsPr + ramPr

if (gpus>processors) {
    finalPr=finalPr - (finalPr*0.15)
}
if (budget>=finalPr) {
    console.log (`You have ${(budget-finalPr).toFixed(2)} leva left!`)
}
else {
    console.log (`Not enough money! You need ${(finalPr-budget).toFixed (2)} leva more!`)
}
}
//shopping (["900","2","1","3"])
shopping (["920.45","3","1","1"])

