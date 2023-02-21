function solve(speed, area) {
    let allowedSpeeds = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    if (speed > allowedSpeeds[area]) {
        let speeding = speed - allowedSpeeds[area];
        logSpeeding(speeding);
    }
    else{
        console.log(`Driving ${speed} km/h in a 50 zone`)
    }
 
    function logSpeeding(speeding) {
       
       if (speeding <= 20) {
            console.log(`The speed is 1 km/h faster than the allowed speed of 20 - speeding`);
        } else if (speeding <= 40) {
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of 90 - excessive speeding`);
        } else {
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of 130 - reckless driving`);
        }
    }
}
solve(40, 'city')