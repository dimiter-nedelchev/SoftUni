function vowelSum (input) {

    let word=input [0]
    let points=0

    for (i=0;i<=word.length;++i) {
        switch (word[i]) {
            case "a":
                points+=1
                break
                case "e":
                    points+=2
                    break
                    case "i":
                        points+=3
                        break
                        case "o":
                            points+=4
                            break
                            case "u":
                                points+=5
                                break
                                default:
                                    points+=0
                                    break
        }
    }
    console.log (points)
}
vowelSum (["rectangular"])