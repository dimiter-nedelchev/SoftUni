function cardGame(input){


    let type= {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }
    let power= {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }

    let players= {};
    let sum=0;
    let currentType='';
    let currentPower=''

    input.forEach(player => {
        let [name, deck]= player.split(': ');

        if(players[name]){
            deck= deck.split(', ');
        for(const card of deck){
            if(!players[name].includes(card)){
                players[name]+=`, ${card}`
            }
        }
    }
    else{
        deck= deck.split(', ');
        players[name]= deck.shift()
        for(const card of deck){
            if(!players[name].includes(card)){
                players[name]+=`, ${card}`
            }
        }
    }
    })

   for(let deck in players){
        const cards= players[deck].split(", ")

        for(let card of cards){
        const currentCard= card.split('');

        if(currentCard.length<3){
         currentType= currentCard[0];
         currentPower= currentCard[1];
        }
        else{
             currentType= currentCard[0] + currentCard[1]
             currentPower= currentCard[2]
        }

        sum+= (type[currentType])*(power[currentPower])
        }
        players[deck]= sum;
        console.log(`${deck}: ${players[deck]}`)
        sum=0;
   }
}
cardGame([

    'John: 2C, 4H, 9H, AS, QS',
    
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'John: JD, JD, JD, JD'
    
    ])