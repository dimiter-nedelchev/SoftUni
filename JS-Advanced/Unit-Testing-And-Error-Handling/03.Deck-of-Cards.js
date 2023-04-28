function deckOfCards(deck){
    
    let cardDeck= [];

    for(let card of deck){
        let currentCard= card.split('')
        let suit= currentCard.pop();
        let face= currentCard.join('');
    try {
       cardDeck.push(playingCards(face,suit));
    }
    catch (ex){
       return console.log(ex.message);
    }
    };

    function playingCards(face, suit){

        let faces= ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits= {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        };
        
        if(face !== face.toUpperCase() || suit !== suit.toUpperCase()){
            throw Error(`Invalid card: ${face}${suit}`);
        };
    
        if(!faces.includes(face) || !suits.hasOwnProperty(suit)){
            throw Error (`Invalid card: ${face}${suit}`);
        };
        
        return `${face}${suits[suit]}`
    };
    console.log(cardDeck.join(' '))
}
//deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards (['5S', '3D', '1C', '2D']);