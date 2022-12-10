function specialNumbers(num) {

let sum=0;
let number=num;
let currentNum=0;

for (let i=1;i<=number;i++) {

    currentNum=i.toString();

    for (let j=0;j<currentNum.length;j++) {

        sum+= Number(currentNum[j]); 
        
    }
        let res= sum===7 || sum===5 || sum===11
        ? "True"
        : "False";

        console.log(`${i} -> ${res}`);
        sum=0;
}
}
//specialNumbers(15);
specialNumbers(20);