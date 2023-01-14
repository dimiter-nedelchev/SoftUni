function oddOccurrences(input){

   
    let words= input.split(' ')
    let occurrences= {};
    let oddWords=''

    words.forEach(currentWord => {
        const word= currentWord.toLowerCase();

        if(occurrences[word]){
            occurrences[word]+= 1
        }
        else{
            occurrences[word]= 1
        }
    })

    for(const word in occurrences){
        if(occurrences[word] % 2 !== 0){
            oddWords+= `${word} `
        }
    }
    console.log(oddWords)
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')