function squareOfStars(size){

    if(typeof size === 'undefined'){
        for(let i= 1; i <= 5; i++){
            console.log('* '.repeat(5));
        }
        return
    }
    
    for(let i= 1; i <= size; i++){
        console.log('* '.repeat(size));
    }
}
squareOfStars(2);
squareOfStars();