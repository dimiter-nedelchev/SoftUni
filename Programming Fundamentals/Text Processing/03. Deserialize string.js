function deserializeString(input){

    let chars= [];

    input.forEach(string => {
        if(string !== 'end'){
            let [char, indexes]= string.split(':');
            let indexArr= indexes.split('/');
            const length= indexArr.length - 1;

            for(let i= 0; i <= length; i++){
                let currentIndex= Number(indexArr[i]);
                chars[currentIndex]= char;
            }
        }
    })
    console.log(chars.join(''));
}
deserializeString(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']
)