function radioCrystals(arr) {

    let index=0;
    let desiredThickness=arr[index++];
    let chunk=0;
    
    for(let i=1;i<=arr.length-1;i++){
        chunk=arr[index++];

       console.log(`Processing chunk ${chunk} microns`);

       let cutSize= cutChunk(arr);
       let lapSize=lapChunk(cutSize);
       let grindSize=grindChunk(lapSize);
       let etchSize=etchChunk(grindSize);
       let xraySize=xrayChunk(etchSize);

        function cutChunk(arr){
            let cut=0
            while(chunk/4>=desiredThickness){
            chunk=chunk/4;
            cut++
            if(chunk/4<desiredThickness){
                console.log(`Cut x${cut}`);
                chunk=Math.floor(chunk);
                console.log('Transporting and washing')
                return chunk;
            }
        }
    }

        function lapChunk(cutSize) {
            let lap=0
            while(chunk*0.8>=desiredThickness){
                chunk*=0.8
                lap++
                if(chunk*0.8<desiredThickness){
                    console.log(`Lap x${lap}`);
                    chunk=Math.floor(chunk);
                    console.log('Transporting and washing')
                    return chunk;
                }
            }
        }

        function grindChunk(lapSize){
            let grind=0;
            while(chunk-20>=desiredThickness){
                chunk-=20
                grind++

                if(chunk-20<desiredThickness){
                    console.log(`Grind x${grind}`);
                    chunk=Math.floor(chunk);
                    console.log(`Transporting and washing`)
                    return chunk;
                }
            }
        }

        function etchChunk(grindSize){
            let etch=0;
            while(chunk>desiredThickness){
                chunk-=2;
                etch++
                if(chunk<desiredThickness){
                console.log(`Etch x${etch}`);
                chunk=Math.floor(chunk)
                console.log(`Transporting and washing`);
                return chunk
                }
                else if(chunk===desiredThickness){
                console.log(`Etch x${etch}`);
                console.log(`Transporting and washing`)
                return chunk;
                }
            }
        }

        function xrayChunk(etchSize) {
            let xray=0;
            if(chunk<desiredThickness) {
            chunk+=1;
            xray++;
            chunk=Math.floor(chunk);
            console.log(`X-ray x${xray}`);
            return chunk;
            }
        }

        if(chunk<desiredThickness) {
            xrayChunk(etchSize)
        }
        else {
            console.log(`Finished crystal ${desiredThickness} microns`)
        }
}
}
//radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);