function bookShelf(input){

    let bookShelf= {};

    input.forEach(command => {
        if(command.includes(' -> ')){
            const[id, genre]= command.split(' -> ');

            if(!bookShelf.hasOwnProperty(id)){
                bookShelf[id]= {
                    [genre]: [],
                    count: 0
                }
            }
        }
        else{
            const[title, genre]= command.split(', ');

            for(let id in bookShelf){
                if(bookShelf[id].hasOwnProperty(genre)){
                    bookShelf[id][genre].push(title);
                    bookShelf[id].count+= 1;
                }
            }
        }
    })

    let sortedShelves= Object.entries(bookShelf);
    sortedShelves= sortedShelves.sort((a, b) => (b[1].count) - (a[1].count))

    for(let shelf of sortedShelves){
        let shelfId= shelf[0];
        
        for(let genre in bookShelf[shelfId]){
            console.log(`${shelfId} ${genre}: ${bookShelf[shelfId].count}`);

           delete bookShelf[shelfId].count

            let sortedBooks= bookShelf[shelfId][genre]
            sortedBooks= sortedBooks.sort((a, b) => a.localeCompare(b))

            for(let title of sortedBooks){
                console.log(`--> ${title}`)
            }   
        }
    }
}
bookShelf(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi']
);