function subtract() {
   let firstElementValue= document.getElementById('firstNumber').value;
   let secondElementValue= document.getElementById('secondNumber').value;
   let resultElement= document.getElementById('result')

   const result= Number(firstElementValue) - Number(secondElementValue);
   resultElement.textContent= result;
}