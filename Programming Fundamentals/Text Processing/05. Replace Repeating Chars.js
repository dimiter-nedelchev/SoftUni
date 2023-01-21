function replaceRepeating(input){

   let charArr= input.split('');

    let length= charArr.length-1;
    let string= input[0]

    for(let i=1;i<=length;i++){
        const current= charArr[i];
        const previous= charArr[i-1];

        if(current !== previous){
            string+= current
        }
    }

    console.log(string)
}
//replaceRepeating('aaaabbbbbcdddeeeedssaa');
replaceRepeating('abbcc');