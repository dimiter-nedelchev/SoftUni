function addressBook(input){

    let addresses= {}

    for(let pair of input){
        const [name, address] = pair.split(':');

        addresses[name] = address
    }

    let newAddresses= Object.entries(addresses)

    newAddresses.sort((a,b) => (a[0].localeCompare(b[0])))

   newAddresses.forEach(address => {
    console.log(`${address[0]} -> ${address[1]}`)
   })
}
addressBook(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd']);