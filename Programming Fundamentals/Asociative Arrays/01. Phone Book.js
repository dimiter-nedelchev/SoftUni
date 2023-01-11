function phoneBook(input){

    let phonebook= {}
    input.forEach(entry => {
        const [name, number] = entry.split(' ');

        phonebook[name]= number
    })

    for(const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`)
    }

}
phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);
phoneBook(['George 0552554',

'Peter 087587',

'George 0453112',

'Bill 0845344']);