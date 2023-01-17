function arenaTier(input){

    let gladiators= {};
    let command= '';
  
    while(command !== 'Ave Cesar') {
        let [name, technique, skill]= input.shift().split(' -> ');
        let command= name;

        if(command === 'Ave Cesar'){
            break;
        }
        else if(command.includes("vs")){
            battle(gladiators, command);
        }
        else {
            if(!gladiators.hasOwnProperty(name)){
                gladiators[name]= {};
            }
            
            if(gladiators[name][technique] < Number(skill)){
                    gladiators[name][technique]= Number(skill);
                    gladiators[name][totalSkill]+= (Number(skill) - gladiators[name][technique])
                    
                }
            else if(!gladiators[name].hasOwnProperty(technique)){
                    gladiators[name][technique]= Number(skill)
                    
                    if(!gladiators[name].hasOwnProperty("totalSkill")){
                        gladiators[name].totalSkill= Number(skill)
                    }
                    else{
                        gladiators[name].totalSkill+= Number(skill)
                    }
                }
            
        }
    }

   function battle(arr, command){
        let names= command.split(' vs ');
        let [gladiator1, gladiator2]= names

        if(arr.hasOwnProperty(gladiator1) && arr.hasOwnProperty(gladiator2)){
        for(const key of Object.keys(arr[gladiator1])){
            if(arr[gladiator2].hasOwnProperty(key) && key !== 'totalSkill') {
                if(arr[gladiator1].totalSkill > arr[gladiator2].totalSkill){
                    delete arr[gladiator2]
                    return arr;
                }
                else if(arr[gladiator1].totalSkill < arr[gladiator2].totalSkill && key !== 'totalSkill'){
                    delete arr[gladiator1]
                    return arr;
                }
                else if(arr[gladiator1].totalSkill === arr[gladiator2].totalSkill){
                    return arr;
                }
            }
        }
    }
   }
   
  for(const key of Object.keys(gladiators)){
       let curGladiator= Object.entries(gladiators[key])
       curGladiator.sort(gladiatorSort)
       gladiators[key]= Object.fromEntries(curGladiator)
}

let sorted= Object.entries(gladiators)
   sorted.sort(newSort)
 
   function newSort(cur,next){
    if(cur[1].totalSkill === next[1].totalSkill){
       return (cur[0]).localeCompare(next[0])
    }
   return next[1].totalSkill - cur[1].totalSkill
}

function gladiatorSort(cur, next){
        if(cur[1] === next[1]){
            return (cur[0]).localeCompare(next[0])
        }
        return next[1] - cur[1]
}

for(let i= 0;i <= sorted.length - 1;i++ ){
    console.log(`${sorted[i][0]}: ${sorted[i][1].totalSkill} skill`)
    delete sorted[i][1].totalSkill

    let arr= Object.entries(sorted[i][1])
    let skills= Object.fromEntries(arr)
    for(const [key,value] of Object.entries(skills)){
        console.log(`- ${key} <!> ${value}`)
    }   
}
}
arenaTier([ 'Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar' ])