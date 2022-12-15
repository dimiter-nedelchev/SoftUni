function cone(radius,height) {

    const p=Math.PI;

    let volume=(height*p*Math.pow(radius,2))/3;
    let area=p*radius*(radius+Math.sqrt(Math.pow(radius,2) + Math.pow(height,2)));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}
cone(3,5);
cone(3.3,7.8);