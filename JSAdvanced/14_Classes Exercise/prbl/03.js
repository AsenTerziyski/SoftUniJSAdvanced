function ticketSorter(tickets, sortingCriteria) {

    let resultTicketArray = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let i = 0; i < tickets.length; i++) {
        let currentLine = tickets[i].split('|');
        let currentDestination = currentLine[0];
        let currentPrice = Number(currentLine[1]);
        let currentStatus = currentLine[2];
        let currentTicket = new Ticket(currentDestination, currentPrice, currentStatus);
        resultTicketArray.push(currentTicket);
    }

    return resultTicketArray.sort((t1, t2) => {
        if (typeof t1[sortingCriteria] === 'number') {
            return t1[sortingCriteria] - t2[sortingCriteria];
        } else {
            return t1[sortingCriteria].localeCompare(t2[sortingCriteria])
        }
    })
}

ticketSorter(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],'destination'
)
