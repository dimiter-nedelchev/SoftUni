function animalType (input) {
    let animalT=input [0]

    switch (animalT) {
        case "dog":
            console.log ("mammal")
            break
            case "crocodile":
                case "snake":
                    case "tortoise":
                        console.log ("reptile")
                        break
                        default:
                            console.log ("unknown")
                            break
    }

}
//animalType (["dog"])
//animalType (["snake"])
animalType (["cat"])