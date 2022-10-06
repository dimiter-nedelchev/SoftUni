function swimmingRecord (input) {
let worldRecord= Number (input[0])
let distance=Number (input[1])
let speedPerS=Number (input [2])

let slowdownT=distance/15
slowdownT=Math.floor(slowdownT)
let slowdown=slowdownT*12.5
let record=(speedPerS*distance) + slowdown
    

if (record<worldRecord) {
    console.log (`Yes, he succeeded! The new world record is ${record.toFixed(2)} seconds.`)
}
else {
    console.log (`No, he failed! He was ${(record-worldRecord).toFixed (2)} seconds slower.`)

}
}

//swimmingRecord (["10464","1500","20"])

swimmingRecord (["55555.67","3017","5.03"])
//1.	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
//2.	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
//3.	Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]


