function addRemoveElements(input){
  
    let counter= 1;
    let array= []
    
    for(let i=0; i <= input.length -1; i++) {
      
      if(input[i] == 'add'){
        array.push(counter)
      }
      else{
        array.pop()
      }
      counter++
    }
    
    if(array.length >= 1){
      return array.join('\n')
    }
    console.log('Empty')
  }