function countStrings(string, target){

    let count= 0;
    
    string.split(' ').forEach(word => {
        if(word === target){
            count+= 1
        }
    })
    
    console.log(count)
}
countStrings('This is a word and it also is a sentence',
'is'
);
countStrings('softuni is great place for learning new programming languages',
'softuni'
);