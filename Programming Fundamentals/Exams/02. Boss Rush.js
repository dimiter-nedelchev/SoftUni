function bossRush(input){

    const pattern= /[|](?<Boss>[A-Z]{4,})[|][:][#](?<title>[A-Za-z]+[\s][A-Za-z]+)[#]/g;
    let count= Number(input.shift());

    for(i= 0; i <= count -1; i++){
        let currentCharacter= input[i];

        let validCharacter= pattern.exec(currentCharacter);

        if(validCharacter !== null){
            let strength= (validCharacter.groups['Boss']).length;
            let armor= (validCharacter.groups['title']).length;

            let bossName= validCharacter.groups['Boss'];
            let titleName= validCharacter.groups['title'];

            console.log(`${bossName}, The ${titleName}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armor}`);
        }
        else{
            console.log("Access denied!");
        }
        validCharacter=pattern.exec(currentCharacter);
    }
}
bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])
;