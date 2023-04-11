function calorieObject(array){

    const calorieBook= {};
    const length= array.length - 1;

    for(let i=0; i <= length; i+= 2){
        calorieBook[array[i]]= Number(array[i + 1]);
    }
    console.log(calorieBook)
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])