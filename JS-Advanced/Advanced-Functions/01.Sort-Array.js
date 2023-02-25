function sortArray(array, criteria){

    let sortedArray= [];

    if(criteria == 'asc'){
        sortedArray= array.sort((a,b) => a - b);
    }
    else(
        sortedArray= array.sort((a,b) => b - a)
    )
        return sortedArray
}
sortArray([14, 7, 17, 6, 8], 'dsc')