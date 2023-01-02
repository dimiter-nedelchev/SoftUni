function loading(num){

    let loadBar= loadingBar(num);

    function loadingBar(num){
        let bar=[];

        for(let i=0;i<10;i++) {
            bar[i]='.'
        }

        if(num>0) {
            let iterations=num/10;

            for(let j=0;j<iterations;j++){
                bar[j]='%'
            }
            let newBar=bar.join('')
            return newBar;
        }
        else if (num===0){
            let newBar=bar.join('')
            console.log(newBar)
            return newBar;
        }
    }

    if(num===100) {
        console.log('100% Complete!')
        console.log(`[${loadBar}]`)
    }
    else {
        console.log(`${num}% [${loadBar}]`);
        console.log(`Still loading...`)
    }
}
loading(30);
loading(50);
loading(100);