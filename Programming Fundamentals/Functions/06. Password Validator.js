function passwordValidator(pass){
    
    let length=pass.length;
    let isLong= long(length);
    let isSymbolFree= symbol(pass);
    let isDigited= digited(pass);
    
    function long(length){
        let isValid=true;
        let counter=0;
        for(let i=0;i<length;i++){
            counter++
        }
        if(counter<6 || counter>10){
            isValid=false;
            console.log("Password must be between 6 and 10 characters")
            return isValid;
        }
        return isValid;
    }

    function digited(pass){
        let isValid=false;
        let digitCount=0;

        for(let i=0;i<length;i++) {
            let currentChar= pass[i]

            if(currentChar.charCodeAt(0)>=48 && currentChar.charCodeAt(0)<=57) {
                digitCount++
            }
        }
        if(digitCount>=2){
            isValid=true;
            return isValid;
        }
        else{
            console.log("Password must have at least 2 digits");
            return isValid;
        }
    }

    function symbol(pass){
        let isValid=true;

        for(let i=0;i<length;i++){
            let currentChar=pass[i];
                currentChar=currentChar.charCodeAt()
            let numRange= currentChar>=48 && currentChar<=57;
            let upperCRange= currentChar>=65 && currentChar<=90;
            let lowerCRange= currentChar>=97 && currentChar<=122;

            if(!numRange && !upperCRange && !lowerCRange){
                isValid=false;
                console.log("Password must consist only of letters and digits");
                return isValid;
            }
        }
        return isValid
    }
    if(isLong===true && isDigited===true && isSymbolFree===true){
        console.log("Password is valid")
    }
}
//passwordValidator('logIn')
//passwordValidator('MyPass123');
passwordValidator('Pa$s$s');