function race(input){

    let names= input.shift().split(', ')
    let racers= {};
    let letterPattern= /[a-z]/gi
    let numPattern= /[0-9]/g
    let length= input.length - 1;
    let name= ''
    let distance= 0;

    names.forEach(name => {
        racers[name]= 0;
    })

   for(let i = 0; i <= length; i++){
    let line= input[i]
    let letter= letterPattern.exec(line)
    
    while(letter){
        name+= letter;
        letter= letterPattern.exec(input[i])
    }

    if(racers.hasOwnProperty(name)){
        let km= numPattern.exec(input[i])
        while(km){
            distance+= Number(km);
            km= numPattern.exec(input[i])
        }
        racers[name]+= distance;
        distance= 0;
    }
    name= '';
   }

   let sorted= Object.entries(racers);
   sorted.sort((a,b) => b[1] - a[1]);

   let winners= {
        '1st place': sorted[0][0],
        '2nd place': sorted[1][0],
        '3rd place': sorted[2][0],
   }

   for(const place in winners){
    console.log(`${place}: ${winners[place]}`)
   }
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',

'Mi*&^%$ch123o!#$%#nne787) ',

'%$$B(*&&)i89ll)*&) ',

'R**(on%^&ald992) ',

'T(*^^%immy77) ',

'Ma10**$#g0g0g0i0e',

'end of race'])