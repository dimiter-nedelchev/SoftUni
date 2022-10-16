function hotelRoom (input) {

    let month=input [0]
    let days=Number (input[1])

    Studioprice=0
    Apartmentprice=0

    switch (month) {
        case "May":
            case "October":
                Studioprice=days*50
                Apartmentprice=days*65
                if (days>7 && days<14) {
                    Studioprice=Studioprice*0.95
                }
                else if (days>14) {
                    Studioprice=Studioprice*0.7
                    Apartmentprice=Apartmentprice*0.9
                }
                break
                case "June":
                    case "September":
                        Studioprice=days*75.20
                        Apartmentprice=days*68.70
                        if (days>14) {
                            Studioprice=Studioprice*0.8
                            Apartmentprice=Apartmentprice*0.9
                        }
                        break
                        case "July":
                            case "August":
                                Studioprice=days*76
                                Apartmentprice=days*77
                                if (days>14) {
                                    Apartmentprice=Apartmentprice*0.9
                                }
                                break
    }
    console.log (`Apartment: ${Apartmentprice.toFixed(2)} lv.`)
    console.log (`Studio: ${Studioprice.toFixed(2)} lv.`)

}
hotelRoom (["May","15"])
hotelRoom (["June","14"])
hotelRoom 
hotelRoom 
hotelRoom 