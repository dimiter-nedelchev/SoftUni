function fishTank (input) {
    let l=Number (input[0]);
    let w=Number (input[1]);
    let h=Number (input[2]);
    let percentage=Number (input[3])/100;

    let tankVolumeCm=l*w*h;
    let tankVolumeL=tankVolumeCm/1000;
    let tankVolume=tankVolumeL - (tankVolumeL*percentage);
    
    console.log(tankVolume);

}
fishTank (["85", "75", "47","17"])