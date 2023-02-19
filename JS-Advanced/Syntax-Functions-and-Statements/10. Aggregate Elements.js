function aggregateElements(numbers){

   console.log(aggregate(numbers, x => x ));
   console.log(aggregate(numbers, x => 1/x));
   console.log(aggregate(numbers, x => x.toString()));

    function aggregate(numbers, func){
        let result= 0;

        for(let i=0; i <= numbers.length - 1; i++){
            result+= func(numbers[i]);
        }
        return result;
    }
}
aggregateElements([1, 2, 3]);