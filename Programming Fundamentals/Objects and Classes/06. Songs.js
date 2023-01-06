function songs(arr){


    const length= arr.shift() - 1;
    const playlist= arr.pop();
    let index= 0;

    for(let i=0;i<=length; i++){
       
        const commands= arr[i].split('_');
        const currentPlaylist= commands[0];
        const currentSong= commands[1];

        if(currentPlaylist === playlist || playlist === 'all') {
            class Song {
                constructor(name) {
                    this.name= name
                }
                play(){
                    console.log(`${this.name}`)
                }
            }
            let song= new Song(currentSong);
            song.play();
        }
    }

}
//songs([3,'favourite_DownTown_3:14','favourite_Kiss_4:16','favourite_Smooth Criminal_4:01','favourite']);
//songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);
songs([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater'])
