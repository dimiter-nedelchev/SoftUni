function solve(face, suit){

    let faces= [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let suits= {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };
    
    if(face !== face.toUpperCase() || suit !== suit.toUpperCase()){
        throw 'Error';
    };

    if(!faces.includes(face) || !suits.hasOwnProperty(suit)){
        throw 'Error';
    };
    
    return card= {
        face,
        suit,
        toString() {
            return `${this.face}${suits[this.suit]}`;
        }
    }
};

let attempt= solve('2', 'c');
attempt.toString();
