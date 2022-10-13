function workingHours (input) {
let day=input [1]
let time=Number (input[0])

if (time>=10 && time<=18) {
    switch (day) {
        case "Monday":
        case "Tuesday":
            case "Wednesday":
                case "Thursday":
                    case "Friday":
                        case "Saturday":
                        console.log ("open")
                        break
                        case "Sunday":
                        console.log ("closed")
                        break
    }
}
else {
    console.log ("closed")
}
}
//workingHours (["11","Monday"])
//workingHours (["19","Friday"])
//workingHours (["11","Sunday"])
