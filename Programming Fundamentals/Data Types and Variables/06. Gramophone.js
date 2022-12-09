function gramophone(band,album,song) {

    let bandName=band;
    let albumName=album;
    let songName=song;

    let duration=(bandName.length*albumName.length) * songName.length/2;
    const rotation=2.5;

    let rotations=Math.ceil(duration/rotation);

    console.log(`The plate was rotated ${rotations} times.`)
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');