function tickets(ticketInfo, sortCriteria){

    const ticketBook= [];

    class Ticket {
        constructor(destination, price, status){
            this.destination= destination,
            this.price= Number(price),
            this.status= status
        }
    };

    ticketInfo.forEach(ticket => {
        const [destination, price, status]= ticket.split('|');
        const currentTicket= new Ticket(destination, price, status);

        ticketBook.push(currentTicket);
    });

   if(sortCriteria !== 'price'){
    return ticketBook.sort((a,b) => (a[sortCriteria]).localeCompare(b[sortCriteria]));
   }
   return ticketBook.sort((a,b) => a[sortCriteria] - b[sortCriteria]);
}
tickets(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination');