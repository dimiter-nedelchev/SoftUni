function rotateArray(array, iterations){

    for(let i= 1; i <= iterations; i++){
        let lastNum= array.pop();
        array.unshift(lastNum);
    }
    console.log(array.join(' '))
}
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)