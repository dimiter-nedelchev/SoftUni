function library (input) {

    index=0
    let favBook=input [index++]
    let command=input [index++]

    let books=0

    while (command!=="No More Books") {
        if (command===favBook) {
          console.log   (`You checked ${books} books and found it.`)
          break;
        }
        books += 1
        command=input [index++]

        if (command==="No More Books") {
            console.log (`The book you search is not here!`)
            console.log (`You checked ${books} books.`)
        }
        
    }
    
}