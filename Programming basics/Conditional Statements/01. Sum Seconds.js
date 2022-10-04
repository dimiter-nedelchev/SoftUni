function sumSeconds (input) {
let first=Number (input[0])
let second=Number (input[1])
let third=Number (input[2])

let totalTime=first + second + third
let timeMinutes=Math.floor(totalTime/60)
let timeSeconds=totalTime%60

if (timeSeconds<10) {
    timeSeconds=(`0${timeSeconds}`)
}

console.log(`${timeMinutes}:${timeSeconds}`)
}
sumSeconds (["35", "45", "44"])