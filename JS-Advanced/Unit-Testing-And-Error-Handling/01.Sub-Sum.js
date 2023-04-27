function solve(array, start, end){

    if(!Array.isArray(array)){
        return NaN;
    };

    if(start < 0){
        start= 0;
    };

    if(end > array.length - 1){
        end= array.length - 1;
    };

    return array.slice(start, end + 1).map(Number).reduce((previous, current) => previous + current, 0);
   
}
solve([10, 20, 30, 40, 50, 60], 3, 300);
solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);