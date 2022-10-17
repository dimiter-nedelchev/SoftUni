function onTime (input) {
    let examH=Number (input[0])
    let examM=Number (input[1])
    let arriveH=Number (input[2])
    let arriveM=Number (input[3])
    
    let timeE=(examH*60) + examM
    let timeA=(arriveH*60) + arriveM
    
    let finalT=0
    let finalH=0
    let finalM=0
    
    
    if (timeE-timeA<=30 && timeE-timeA>=1) { 
    finalT=Math.abs(timeE-timeA)
    finalH=Math.floor(finalT/60)
    finalM=finalT%60
    
    console.log ("On time")
    console.log (`${finalM} minutes before the start`)
    }
    
    else if (timeE===timeA || timeE-timeA===0) {
        console.log ("On time")
    }
    
    
    else if (timeA>timeE) {
       if (timeA-timeE<60 && timeA-timeE>=1) {
        finalT=timeA-timeE
        finalH=Math.floor(finalT/60)
        finalM=finalT%60
    
    
        console.log ("Late")
        console.log (`${finalM} minutes after the start`)
       }
    
       else if (timeA-timeE>60) {
        finalT=timeA-timeE
        finalH=Math.floor(finalT/60)
        finalM=finalT%60
    
        if (finalM<10) {
            finalM="0" + finalM
        }
        console.log("Late")
        console.log(`${finalH}:${finalM} hours after the start`)
    }   
    
        }
    
    
    else if (timeE-timeA>30) {
        if (timeE-timeA<60 && timeE-timeA>30) {
            finalT=Math.abs(timeE-timeA)
            finalH=Math.floor(finalT/60)
            finalM=finalT%60 
    
            
            console.log("Early")
            console.log (`${finalM} minutes before the start`)
        }
    
        else if (timeE-timeA>=60) {
            finalT=Math.abs(timeE-timeA)
            finalH=Math.floor(finalT/60)
            finalM=finalT%60  
    
            if (finalM<10) {
                finalM="0" + finalM
            }
            console.log ("Early")
            console.log (`${finalH}:${finalM} hours before the start`)
        }
            
        }
        
    }
    