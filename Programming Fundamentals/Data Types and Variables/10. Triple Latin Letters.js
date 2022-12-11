function tripleLetters(num) {

    number=Number(num);

    let total="";

    for (let i=1;i<=number;i++) {
        for (let j=1;j<=number;j++) {
            for (let k=1;k<=number;k++) {
                total+=`${String.fromCharCode(96+i)}${String.fromCharCode(96+j)}${String.fromCharCode(96+k)} \n`
            }
        }
    }
console.log(total)
}
//tripleLetters('3');
tripleLetters('2');