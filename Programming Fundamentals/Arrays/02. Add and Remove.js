function addAndRemove(arr) {
    let newArr = [];
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num++;
        if (arr[i] === 'add') {
            newArr.push(num);
        } else if (arr[i] === 'remove') {
            newArr.pop();
        }
    }
    
    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}
addAndRemove(['remove', 'add', 'remove', 'add', 'remove']);
addAndRemove(['add', 'add', 'add','remove','remove','remove','add'])