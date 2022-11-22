function mobileOperator (input) {

    let length=input [0]
    let type=input [1]
    let internet=input[2]
    let months=Number (input[3])

    let monthlyFee=0
    let totalFee=0

    if (length==="one") {
        if (internet==="yes") {
           if (type==="Small") {
            monthlyFee= 9.98+5.50
           }
           else if (type==="Middle") {
            monthlyFee= 18.99+4.35
           }
           else if (type==="Large") {
            monthlyFee= 25.98+4.35
           }
           else {
            monthlyFee=35.99+3.85
           }
        }
        else if (internet==="no") {
            if (type==="Small") {
                monthlyFee=9.85
            }
            else if (type==="Middle") {
                monthlyFee=18.99
            }
            else if (type==="Large") {
                monthlyFee=25.98
            }
            else {
                monthlyFee=35.99
            }
        }
        totalFee=monthlyFee*months
        console.log (`${totalFee.toFixed(2)} lv.`)
    }
    else if (length==="two") {
        if (internet==="yes") {
            if (type==="Small") {
                monthlyFee=8.58+5.5
            }
            else if (type==="Middle") {
                monthlyFee=17.09+4.35
            }
            else if (type==="Large") {
                monthlyFee=23.59+4.35
            }
            else {
                monthlyFee=31.79+3.85
            }
        }
      else if (internet==="no") {
        if (type==="Small") {
            monthlyFee=8.58
        }
        else if (type==="Middle") {
            monthlyFee=17.09
        }
        else if (type==="Large") {
            monthlyFee=23.59
        }
        else {
            monthlyFee=31.79
        }
      }  
    totalFee=(monthlyFee*months)*0.9625
    console.log (`${totalFee.toFixed(2)} lv.`)
    }
    
    
}
//mobileOperator (["one","Small","yes","10"])
//mobileOperator (["two","Large","no","10"])
//mobileOperator (["two","ExtraLarge","yes","20"])
mobileOperator (["two","Small","yes","20"])