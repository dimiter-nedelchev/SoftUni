function cutAndReverse(input){
   
    let length= input.length
    let half= length/2
    let end= length

    let firstHalf= input.substring(0,half).split('').reverse().join('');;
    let secondHalf= input.substring(half,end).split('').reverse().join('');

    console.log(firstHalf)
    console.log(secondHalf)

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');