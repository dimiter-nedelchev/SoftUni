function charactersInRange(char1,char2){

    let startRange=char1.charCodeAt(0)
    let endRange=char2.charCodeAt(0)

    let totalString='';
    let finalString='';

    if(startRange<endRange){
    finalString= cycle(startRange,endRange);
    }
    else if(endRange<startRange){
    finalString= reverseCycle(startRange,endRange);
    }
    
    function cycle(startRange,endRange){
    for(let i=startRange+1;i<endRange;i++){
        totalString+= `${String.fromCharCode(i)} `
    }
    return totalString;
}

    function reverseCycle(startRange,endRange){
        for(let i=endRange+1;i<startRange;i++){
            totalString+= `${String.fromCharCode(i)} `
        }
        return totalString;
    }
    console.log(finalString)
}
charactersInRange('a','d');
charactersInRange('#',':');
charactersInRange('C','#');
