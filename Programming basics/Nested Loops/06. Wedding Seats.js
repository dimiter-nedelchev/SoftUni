function weddingSeats (input) {

    let sector=input[0].charCodeAt ()
    let row=Number (input[1]) - 1
    let seats=Number (input[2])
    let evenSeats=seats+2
    let initialSeats=seats
    let seatNum=''
    let seatCount=0

    for (i=65;i<=sector;i++) {row+= 1
        for(j=1;j<=row;j++) {
            if (j%2==0) { 
                seats=evenSeats 
            }
            else {
                seats=initialSeats
            }
            for(k=1;k<=seats;k++) {
                seatNum += String.fromCharCode (i) + j + String.fromCharCode(96+k) + "\n" +" " 
                seatCount+= 1
            }
        }
        if (j===row) {
            row+= 1
        }
    }
    console.log (`${seatNum}${seatCount}`)
}
//weddingSeats (["B","3","2"])
weddingSeats (["C","4","2"])