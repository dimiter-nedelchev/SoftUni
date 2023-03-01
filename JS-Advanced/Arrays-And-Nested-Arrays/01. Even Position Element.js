'use strict'
function evenPosition(input){

    let newArray= input.filter((x, i) => {
        if(i % 2 === 0){
            return x
        }
    })
    console.log(newArray.join(' '))
}
evenPosition(['20', '30', '40',

'50', '60']);