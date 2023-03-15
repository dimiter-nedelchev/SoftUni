function attachGradientEvents() {
    //1. Get result element
    //2. Get div for hover and add an event listener to it

    let resultElement= document.getElementById('result');
    let hoverBox= document.getElementById('gradient');

    hoverBox.addEventListener('mousemove', (e) =>{
        let percent= Math.floor((e.offsetX/e.currentTarget.clientWidth)*100);
        resultElement.textContent= `${percent}%`;
    })
}