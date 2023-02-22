function solution(num1){
    return function add(num2){
        let result= num1 + num2;
        return result;
    }
}
let add7 = solution(7);

console.log(add7)

console.log(add7(2));

console.log(add7(3));