function solution(){
    let startString='';
    return {
        append (string) {
            startString+= string;
        },
        removeStart (n) {
            startString= startString.substring(n, startString.length + 1);
        },
        removeEnd (n) {
            startString= startString.substring(0, startString.length - n);
        },
        print () {
            console.log(startString);
        }
    }
}
let secondZeroTest = solution();

secondZeroTest.append('123');

secondZeroTest.append('45');

secondZeroTest.removeStart(2);

secondZeroTest.removeEnd(1);

secondZeroTest.print();