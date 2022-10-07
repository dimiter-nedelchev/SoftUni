function lunchBreak (input) {
let show=input [0]
let episodeL=Number (input[1])
let lBreak=Number (input[2])

let lunchT=lBreak/8
let repass=lBreak/4

let epT=lBreak - (lunchT+repass)

if (epT>=episodeL) {
    console.log (`You have enough time to watch ${show} and left with ${Math.ceil(epT-episodeL)} minutes free time.`)
}
else {
    console.log (`You don't have enough time to watch ${show}, you need ${Math.ceil(episodeL-epT)} more minutes.`)
}

}
//lunchBreak (["Game of Thrones","60","96"])
lunchBreak (["Teen Wolf","48","60"])

