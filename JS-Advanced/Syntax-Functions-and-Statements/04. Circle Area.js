function circleArea(radius){

    if(typeof radius !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
        return
    }

    let area= (radius*radius*Math.PI).toFixed(2);
    console.log(area)
}
circleArea(5);
circleArea('name');