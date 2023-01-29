function santaHelper(input){

    const key= Number(input.shift());
    const pattern= /[@](?<name>[A-Za-z]+)[^@\-:!>]*[!](?<behavior>[GB])[!]/g
    let decodedMessage= '';

    input.forEach(el =>{
        if(el !== 'end'){
            for(let char of el){
                const newChar= char.charCodeAt() - key;
                decodedMessage+= String.fromCharCode(newChar);
            }
            let helper= pattern.exec(decodedMessage);

            if(helper){
                const helperName= helper.groups['name'];
                console.log(helperName);
                helper= pattern.exec(decodedMessage);
                decodedMessage=''
            }
        }
    })
}
santaHelper(['3','N}eideidmk$'(mnyenmCNlpamnin$J$','ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge','ppqmkkkmnolmnnCEhq/vkievk$Q$', 'yyegiivoguCYdohqwlqh/kguimhk$J$','end']);