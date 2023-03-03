function pieceOfPie(pies, firstFlavor, secondFlavor){

    const firstIndex= pies.indexOf(firstFlavor);
    const secondIndex= pies.indexOf(secondFlavor);

    const flavors= pies.slice(firstIndex, secondIndex + 1);

    return flavors

}
pieceOfPie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie');