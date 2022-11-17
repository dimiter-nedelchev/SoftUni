function easterTrip (input) {

    let destination=input [0]
    let date=input [1]
    let days=Number (input[2])

    let price=0

    if (date==="21-23") {
        if (destination==="France") {
            price=days*30
        }
        else if (destination==="Italy") {
            price=days*28
        }
        else if (destination==="Germany") {
            price=days*32
        }
    }
    else if (date==="24-27") {
        if (destination==="France") {
            price=days*35
        }
        else if (destination==="Italy") {
            price=days*32
        }
        else if (destination==="Germany") {
            price=days*37
        }
    }

    else if (date==="28-31") {
        if (destination==="France") {
            price=days*40
        }
        else if (destination==="Italy") {
            price=days*39
        }
        else if (destination==="Germany") {
            price=days*43
        }
    }
    console.log (`Easter trip to ${destination} : ${price.toFixed(2)} leva.`)
}
easterTrip (["Germany","24-27","5"])
easterTrip (["Italy","21-23","7"])	
easterTrip (["France","28-31","8"])