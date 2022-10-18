function flowers (input) {

    let hrisN=Number (input[0])
    let roseN=Number (input[1])
    let tullipN=Number (input[2])
    let season=input [3]
    let holiday=input[4]

    let hrisPr=0
    let rosePr=0
    let tullipPr=0
    let finalPr=0

    if (holiday==="Y") {
        if (season==="Spring" || season==="Summer") {
            hrisPr=hrisN*(2*1.15)
            rosePr=roseN*(4.10*1.15)
            tullipPr=tullipN*(2.5*1.15)

            finalPr=tullipPr+rosePr+hrisPr
            
            if (season==="Spring" && tullipN>7) {
                finalPr=finalPr*0.95
            }
            else {
                finalPr=finalPr
            }
            if (hrisN+roseN+tullipN>20) {
                finalPr=finalPr*0.8
            }
            else {
                finalPr=finalPr
            }
        }
        else if (season==="Autumn" || season==="Winter") {
            hrisPr=hrisN*(3.75*1.15)
            rosePr=roseN*(4.5*1.15)
            tullipPr=tullipN*(4.15*1.15)

            finalPr=tullipPr+rosePr+hrisPr

            if (season==="Winter" && roseN>10) {
                finalPr=finalPr*0.9
            }
            else {
                finalPr=finalPr
            }
            if (hrisN+roseN+tullipN>20) {
                finalPr=finalPr*0.8
            }
            else {
                finalPr=finalPr
            }
        }
    }

    else if (holiday==="N") {
        if (season==="Spring" || season==="Summer") {
            hrisPr=hrisN*2
            rosePr=roseN*4.10
            tullipPr=tullipN*2.5

            finalPr=tullipPr+rosePr+hrisPr
            
            if (season==="Spring" && tullipN>7) {
                finalPr=finalPr*0.95
            }
            else {
                finalPr=finalPr
            }
            if (hrisN+roseN+tullipN>20) {
                finalPr=finalPr*0.8
            }
            else {
                finalPr=finalPr
            }
        }
        else if (season==="Autumn" || season==="Winter") {
            hrisPr=hrisN*3.75
            rosePr=roseN*4.5
            tullipPr=tullipN*4.15

            finalPr=tullipPr+rosePr+hrisPr

            if (season==="Winter" && roseN>=10) {
                finalPr=finalPr*0.9
            }
            else {
                finalPr=finalPr
            }
            if (hrisN+roseN+tullipN>20) {
                finalPr=finalPr*0.8
            }
            else {
                finalPr=finalPr
            }
        }
    }

    console.log ((finalPr+2).toFixed(2))
}
//flowers (["2","4","8","Spring","Y"])
//flowers (["3","10","9","Winter","N"])
//flowers (["10","10","10","Autumn","N"])