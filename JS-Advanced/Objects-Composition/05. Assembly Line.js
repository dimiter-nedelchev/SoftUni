function createAssemblyLine(){

const library=  {
        hasClima: function (myCar) {
        myCar.temp= 21;
        myCar.tempSettings= 21;
        myCar.adjustTemp= function (){
            if(this.temp < this.tempSettings){
                this.temp+= 1;
            }
            else if(this.temp > this.tempSettings){
                this.temp-= 1;
            }
        }
    },
        hasAudio: function(myCar) {
            myCar.currentTrack= null;
            myCar.nowPlaying= function(){
                if(this.currentTrack !== null){
                console.log(`Now playing ${this.currentTrack.name}' by ${this.currentTrack.artist}`)
                }
            }
        },
        hasParktronic: function(myCar) {
            myCar.checkDistance= function(myCar){
                if(myCar < 0.1){
                    console.log("Beep! Beep! Beep!");
                }
                else if(myCar >= 0.1 && myCar < 0.25){
                    console.log("Beep! Beep!");
                }
                else if(myCar >= 0.25 && myCar < 0.5){
                    console.log("Beep!");
                }
                else{
                    console.log('')
                }
            }
        }
}
    return library
}

const myCar= {
    make: 'Toyota',
    model: 'Avensis'
};
const assemblyLine= createAssemblyLine();

assemblyLine.hasParktronic(myCar);

myCar.checkDistance(0.4);

myCar.checkDistance(0.2);