function tomCat (input) {
let rest=Number (input [0])

let restP=rest*127
let workP=(365-rest)*63

let totalP=restP+workP
let remainT=Math.abs(totalP-30000)

let hours= Math.floor(remainT/60)
let minutes=remainT%60

if (totalP>30000) {
    console.log (`Tom will run away`)
    console.log(`${hours} hours and ${minutes} minutes more for play`)
}
else {
    console.log (`Tom sleeps well`)
    console.log (`${hours} hours and ${minutes} minutes less for play`)
}
}
//tomCat (["20"])
tomCat (["113"])