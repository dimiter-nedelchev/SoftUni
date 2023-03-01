function sumFirstLast(input){

    let first= Number(input.shift());
    let last= Number(input.pop());

    const sum= first + last;
    console.log(sum)

}
sumFirstLast(['20', '30', '40'])