function building (input) {

    let floor=Number (input[0])
    let rooms=Number (input[1])
    let total=''

    for (i=floor;i>=1;i--) {
        for (j=0;j<rooms;j++) {

            if(i===floor) {
                total+= `L${i.toString()}${j.toString()} `
                if (j===rooms-1) {
                    total+= "\n"
                }
            }
           else if (i%2==0) {
                total+= `O${i.toString()}${j.toString()} `
                if (j===rooms-1) {
                    total+= "\n"
                }
                
            }
            else if (i%2!=0){
                total+= `A${i.toString()}${j.toString()} `
                if (j===rooms-1) {
                    total+= "\n"
                }
            }
        }
    }
    console.log (total)
}
building();