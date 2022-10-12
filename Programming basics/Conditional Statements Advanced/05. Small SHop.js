function shop (input) {
    let beverage=input [0]
    let city=input [1]
    let amount=Number (input[2])

    if (beverage==="coffee") {
        switch (city) {
            case "Sofia":
                console.log((amount*0.50).toFixed(1))
                break
                case "Plovdiv":
                    console.log ((amount*0.40).toFixed(1))
                    break
                    case "Varna":
                        console.log ((amount*0.45).toFixed(1))
        }
    }
    if (beverage==="water") {
        switch (city) {
            case "Sofia":
                console.log ((amount*0.80).toFixed(1))
                break
                case "Plovdiv":
                    case "Varna":
                    console.log ((amount*0.70).toFixed(1))
                    break
        }
    }
        if (beverage==="beer") {
            switch (city) {
               case "Sofia":
                console.log ((amount*1.20).toFixed(1)) 
                break
                case "Plovdiv":
                    console.log ((amount*1.15).toFixed(1))
                    break
                    case "Varna":
                        console.log ((amount*1.10).toFixed(1))
                        break
            }
        }
        if (beverage==="sweets") {
            switch (city) {
                case "Sofia":
                    console.log ((amount*1.45).toFixed(4))
                    break
                    case "Plovdiv":
                        console.log ((amount*1.30).toFixed(4))
                        break
                        case "Varna":
                            console.log ((amount*1.35).toFixed (4))
                            break
            }
        }
        if (beverage==="peanuts") {
            switch (city) {
                case "Sofia":
                    console.log ((amount*1.60).toFixed(1))
                    break
                    case "Plovdiv":
                        console.log ((amount*1.50).toFixed(1))
                        break
                        case "Varna":
                            console.log ((amount*1.55).toFixed(1))
                            break
            }
        }
    }
//shop (["coffee","Varna","2"])
//shop (["peanuts","Plovdiv","1"])
//shop (["beer","Sofia","6"])
//shop (["water","Plovdiv","3"])
shop (["sweets","Sofia","2.23"])