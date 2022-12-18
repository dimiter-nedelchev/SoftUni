function reverseInPlace(strings){

    
    for(let i=0;i<strings.length/2;i++) {
        let tempElement=strings[i];

        strings[i]=strings[strings.length-1-i];
        strings[strings.length-1-i]=tempElement;
        
    }
    console.log(strings.join(' '))
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);