function attachEventsListeners() {

    let dayInput= document.getElementById('days');
    let hourInput= document.getElementById('hours');
    let minutesInput= document.getElementById('minutes');
    let secondsInput= document.getElementById('seconds'); 

    const dayButton= document.getElementById('daysBtn');
    const hoursButton= document.getElementById('hoursBtn');
    const minutesButton= document.getElementById('minutesBtn');
    const secondsButton= document.getElementById('secondsBtn');

    dayButton.addEventListener('click', (e) => {
        
        hourInput.value= Number(dayInput.value) * 24;
        minutesInput.value= hourInput.value * 60;
        secondsInput.value= minutesInput.value * 60;
    });
    hoursButton.addEventListener('click', (e) => {
        
        dayInput.value= Number(hourInput.value) / 24;
        minutesInput.value= hourInput.value * 60;
        secondsInput.value= minutesInput.value * 60;
    });
    minutesButton.addEventListener('click', (e) => {
        hourInput.value= Number(minutesInput.value) / 60; 
        dayInput.value= hourInput.value / 24;
        secondsInput.value= minutesInput.value * 60;
    });
    secondsButton.addEventListener('click', (e) => {
        minutesInput.value= Number(secondsInput.value) / 60;
        hourInput.value= minutesInput.value / 60; 
        dayInput.value= hourInput.value / 24;
    });
}