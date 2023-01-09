function flightSchedule(input){

    let flights= input[0];
    let statusChanges= input[1];
    const checkStatus= input[2][0];

    let unchangedFlights= {};
    let changedFlights= {};

    const lengthOfFlights= flights.length - 1;

    statusChanges.forEach(flight => {
        const [number, status]= flight.split(' ');

        for(let i= 0; i <= lengthOfFlights; i++){
            if(flights[i].includes(number)){
                 let [flightNumber, location]= flights[i].split(' ');
                 changedFlights[location]= status;
                 flights[i]= '';
            }
        }
    })

    if(checkStatus === 'Ready to fly'){
        for(let j= 0; j <= lengthOfFlights; j++){
            if(flights[j].length > 1){
                flights[j]=flights[j].split(' ');
                let flightNumber= flights[j][0]
                flights[j]= flights[j].join(' ').split(flightNumber).join(' ').trim()
                let location= flights[j];
                unchangedFlights[location]= 'Ready to fly'
            }
       }
       for(let [key, value] of Object.entries(unchangedFlights)){
        console.log(`{ Destination: '${key}', Status: '${value}' }`)
       }
    }
    else{
        let sorted= Object.entries(changedFlights);
        sorted.sort((a,b) => a[0].localeCompare(b[0]));

        changedFlights= Object.fromEntries(sorted)

        for(let [key, value] of Object.entries(changedFlights)){
            console.log(`{ Destination: '${key}', Status: '${value}' }`)
        }
    }
}
flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
);