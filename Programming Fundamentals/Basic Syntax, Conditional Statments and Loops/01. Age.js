function age(number) {

    if (number>=0 && number<=2) {
        console.log("baby");
    }
    else if (number>2 && number<=13) {
        console.log("child");
    }
    else if (number>13 && number<=19) {
        console.log("teenager");
    }
    else if (number>19 && number<=65) {
        console.log("adult");
    }
    else if (number>=66) {
        console.log("elder");
    }
    else {
        console.log("out of bounds");
    }
}
age(20)
age(1)
age(100)
age(-1)