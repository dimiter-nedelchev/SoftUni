function cinemaTickets (input) {

    let index=0
    let command=input [index++]

    let totalTickets=0
    let ticketType=''
    let standard=0
    let student=0
    let kid=0
    let finalTickets=0
    let freeSeats=0

    let movie=''

    let full=false
    

    while (command!=="Finish") {
        movie=command 
        freeSeats=Number(input[index++])
            while (command!=="End") {
                command=input [index++]
                ticketType=command
                
                if (command==="Finish") {
                    console.log (`${movie} - ${((totalTickets/freeSeats)*100).toFixed(2)}% full.`)
                    finalTickets+= totalTickets
                    full=true
                    break;
                }
                
                if (totalTickets===freeSeats) {
                    console.log (`${movie} - ${((totalTickets/freeSeats)*100).toFixed(2)}% full.`)
                    finalTickets+= totalTickets
                    totalTickets=0
                    break;
                }

                if (command==="End") {
                    console.log (`${movie} - ${((totalTickets/freeSeats)*100).toFixed(2)}% full.`)
                    command=input [index++]
                    finalTickets+= totalTickets
                    totalTickets=0
                    break;
                }

                if (ticketType==="kid") {
                    kid+= 1
                }
                else if (ticketType==="student") {
                    student+= 1
                }
                else {
                    standard+= 1
                }
                totalTickets+= 1
            }
            if (full) {
                break;
            }
    }
    console.log (`Total tickets: ${finalTickets}`)
    console.log (`${((student/finalTickets)*100).toFixed(2)}% student tickets.`)
    console.log (`${((standard/finalTickets)*100).toFixed(2)}% standard tickets.`)
    console.log (`${((kid/finalTickets)*100).toFixed(2)}% kids tickets.`)
}
cinemaTickets();