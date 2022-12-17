function triangleArea(side1,side2,side3) {

    let semiP=(side1+side2+side3)/2;

    let area= Math.sqrt(semiP*(semiP-side1)*(semiP-side2)*(semiP-side3));

    console.log(area);

}
triangleArea(2,3.5,4);
triangleArea(3,5.5,4);