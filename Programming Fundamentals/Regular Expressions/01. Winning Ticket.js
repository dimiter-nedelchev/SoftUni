function winningTicket(input){

    const pattern= /\@{6,}|\${6,}|\^{6,}|\#{6,}/g;
    const trimSpaces= /[\s]+/g;
    const array= input.replace(trimSpaces,'').split(',')
    
    array.forEach(ticket => {
        if(ticket.length === 20){
            const leftMatch= ticket.substring(0,10).match(pattern)
            const rightMatch= ticket.substring(10).match(pattern)

            if(leftMatch && rightMatch){
                const minLength= Math.min(leftMatch[0].length, rightMatch[0].length)
                const winLeft= leftMatch[0].substring(0, minLength)
                const winRight= rightMatch[0].substring(0, minLength)
            if(winLeft === winRight){
                if(winLeft.length === 10) {
                    console.log(`ticket "${ticket}" - ${winLeft.length}${winLeft[0]} Jackpot!`)
                }
                else if(winLeft.length >= 6){
                    console.log(`ticket "${ticket}" - ${winLeft.length}${winLeft[0]}`)
                }
            }
            else{
                console.log(`ticket "${ticket}" - no match`)
            }
        }
            else{
                console.log(`ticket "${ticket}" - no match`)
            }
        }
        else if(ticket){
            console.log(`invalid ticket`)
        }
    })
}
winningTicket('validticketnomatch:(');
winningTicket('Cash$$$$$$Ca$$$$$$sh');
winningTicket('$$$$$$$$$$$$$$$$$$$$,,   aabb ,,  th@@@@@@eemo^^^^^^ey');