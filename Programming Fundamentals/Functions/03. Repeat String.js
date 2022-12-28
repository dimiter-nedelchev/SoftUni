function repeatString(string,iteration){

    function getResult(string,iteration){
        let result=''
        for(let i=1;i<=iteration;i++){
            result+= string;
        }
        return result;
    }
    console.log(getResult(string,iteration))
}
repeatString("abc", 3)