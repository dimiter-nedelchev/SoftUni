function primeNumberChecker(num) {

    if (num%2!==0 && num%3!==0 && num%5!==0 && num%7!==0 || num===2 || num===3 || num===5 || num===7) {
        console.log("true")
    }
    else {
        console.log("false")
    }

}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);