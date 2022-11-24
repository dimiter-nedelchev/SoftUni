function movieDay (input) {

    let shootTime=Number(input[0])
    let scenes=Number(input[1])
    let sceneTime=Number (input[2])

    let prepTime=0.15*shootTime

    let totalTime=prepTime + (scenes*sceneTime)

    if (totalTime<=shootTime) {
        console.log (`You managed to finish the movie on time! You have ${Math.round(shootTime-totalTime)} minutes left!`)
    }
    else {
        console.log (`Time is up! To complete the movie you need ${Math.round(totalTime-shootTime)} minutes.`)
    }
    
}
//movieDay (["120","10","11"])
movieDay (["60","15","3"])
