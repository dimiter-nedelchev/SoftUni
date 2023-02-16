function stringLength(string1, string2, string3){

    let stringLength1= string1.length;
    let stringLength2= string2.length;
    let stringLength3= string3.length;

    let averageLength= Math.floor((stringLength1 + stringLength2 + stringLength3)/3);
    let totalLength= stringLength1 + stringLength2 + stringLength3;

    console.log(totalLength);
    console.log(averageLength);
}
stringLength('chocolate', 'ice cream', 'cake')