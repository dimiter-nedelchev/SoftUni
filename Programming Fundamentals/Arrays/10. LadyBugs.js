    function ladyBugs(arr){

        let index=0;
        let ladyBugIndex=[]
        let fieldLength=arr.shift()
        let ladyBugs=arr.shift().split(' ').map(Number)
        
       
       ladyBugIndex= findLadyBugs(ladyBugs,fieldLength,ladyBugIndex);
    
        function findLadyBugs (ladyBugs,fieldLength,ladyBugIndex){    
        for(let i=0;i<fieldLength;i++){
            ladyBugIndex.push(0);
            for(let j=0;j<=ladyBugs.length-1;j++) {
                if(i === ladyBugs[j]) {
                    ladyBugIndex[i]= 1
                }
            }
        }
        return ladyBugIndex;
    }
    
      let finalBugs=  moveLadyBugs(ladyBugIndex);
        
        function moveLadyBugs(ladyBugIndex) {
    
            for(i=0;i<=arr.length-1;i++) {
                
                let commandsArr=arr[i].split(' ')
                
                let pos=Number(commandsArr[0]);
                let direction=commandsArr[1];
                let newPos=Number(commandsArr[2]);
                
                if(ladyBugIndex[pos] === 0 || pos>=fieldLength-1 || pos<0) {
                    continue;
                }
                if(direction==='right') {
                    if(ladyBugIndex[pos] === 1 && ladyBugIndex[pos + newPos] <= 0){ 
                        ladyBugIndex[pos+newPos]=1;
                        ladyBugIndex[pos]=0;
                    }
                    else if(ladyBugIndex[pos] === 1 && ladyBugIndex[pos + newPos] === 1) {
                        for (let j=pos;j<=fieldLength-1;j+= newPos){
                            
                            if(ladyBugIndex[j] === 0){
                                ladyBugIndex[j]= 1;
                                ladyBugIndex[pos]= 0;
                                break;
                            }
                        }
                        if(ladyBugIndex[pos] !== 0) {
                            ladyBugIndex[pos]= 0;
                        }
                    }   
                }
            
                else if(direction==='left') {
                    if(ladyBugIndex[pos] === 1 && ladyBugIndex[pos-newPos] <= 0){
                        
                        ladyBugIndex[pos-newPos]=1;
                        ladyBugIndex[pos]=0;
                    }
                    else if(ladyBugIndex[pos] === 1 && ladyBugIndex[pos-newPos] === 1) {
                        for(let k=pos;k>=0;k-= newPos) {
                            if(ladyBugIndex[k] === 0){
                                ladyBugIndex[k]= 1;
                                ladyBugIndex[pos]= 0;
                                break;
                            }
                        }
                        if(ladyBugIndex[pos]!== 0){
                            ladyBugIndex[pos]= 0;
                        }
                    }
            }
            }
            return ladyBugIndex;
        }
        console.log(finalBugs.join(' ')) 
    }
ladyBugs([ 3, '0 1','0 right 1','2 right 1' ])
//ladyBugs([ 3, '0 1 2','0 right 1','1 right 1','2 right 1')
//ladyBugs([ 5, '3','3 left 2','1 left -2'])