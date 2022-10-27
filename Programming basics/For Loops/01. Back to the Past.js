function backtopast (input) {

    let inheritence=Number (input[0])
    let year=Number (input[1])
    let totalsum=0
    let age=0

    for (i=1800;i<=year;i++) {
        if (i%2==0) {  
            totalsum=totalsum+12000
        }
        else {
            age=18+(i-1800)
            totalsum=totalsum+12000+50*(age)
        }
        }
        if (totalsum<=inheritence) {
            console.log (`Yes! He will live a carefree life and will have ${(inheritence-totalsum).toFixed(2)} dollars left.`)
        }
        else {
            console.log (`He will need ${(totalsum-inheritence).toFixed(2)} dollars to survive.`)
    }
}

//backtopast (["50000","1802"])
//backtopast (["100000.15","1808"])
