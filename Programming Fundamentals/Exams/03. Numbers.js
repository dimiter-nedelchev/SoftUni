function numbers(numbers) {

    let sequenceOfNumbers= numbers.split(' ').map(Number)
    let sum=0
    
    for(let el of sequenceOfNumbers){
        sum+= el
    }
    let average= sum/sequenceOfNumbers.length

    let largestNumbers= sequenceOfNumbers.filter(x => x > average)

   let final= largestNumbers.sort((a,b) => b - a).slice(0,5)

    if(final.length >= 1) {
        console.log(final.join(' '))
    }
    else{
        console.log('No')
    }
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1')
numbers('-1 -2 -3 -4 -5 -6')