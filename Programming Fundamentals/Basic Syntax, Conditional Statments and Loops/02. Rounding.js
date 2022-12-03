function rounding(number,precision) {

    if (precision>15) {
        number=parseFloat(number.toFixed(15));
    }
    else {
        
        number=parseFloat(number.toFixed(precision));
    }
    console.log(number);
}
rounding(3.1415926535897932384626433832795,2);
rounding(10.522,3);