window.addEventListener('load', solve);

function solve() {
    const firstName= document.getElementById('first-name');
    const lastName= document.getElementById('last-name')
    const dateInElement= document.getElementById('date-in')
    const dateOutElement= document.getElementById('date-out');
    const peopleCount= document.getElementById('people-count');
    const nextBtn= document.getElementById('next-btn');

    const infoList= document.getElementsByClassName('info-list')[0];
    const confirmList= document.getElementsByClassName('confirm-list')[0];

    const verificationElement= document.getElementById('verification')

        nextBtn.addEventListener('click', (e) => {
            const dateIn= new Date(dateInElement.value)
            const dateOut= new Date(dateOutElement.value)

    if(firstName.value  && lastName.value  && peopleCount.value) {
        if(dateIn <= dateOut){

        let listItem= document.createElement('li');
        listItem.className= 'reservation-content';

        let articleElement= document.createElement('article');
        listItem.appendChild(articleElement);
        
        let nameInfo= document.createElement('h3');
        nameInfo.textContent= `Name: ${firstName.value} ${lastName.value}`

        let dateInInfo= document.createElement('p');
        dateInInfo.textContent= `From date: ${dateInElement.value}`

        let dateOutInfo= document.createElement('p');
        dateOutInfo.textContent= `To date: ${dateOutElement.value}`

        let peopleCountInfo= document.createElement('p');
        peopleCountInfo.textContent= `For ${peopleCount.value} people`
        
        let editBtn= document.createElement('button');
        editBtn.className= 'edit-btn';
        editBtn.textContent= 'Edit';

        let continueBtn= document.createElement('button');
        continueBtn.className= 'continue-btn';
        continueBtn.textContent= 'Continue';

        articleElement.appendChild(nameInfo);
        articleElement.appendChild(dateInInfo);
        articleElement.appendChild(dateOutInfo);
        articleElement.appendChild(peopleCountInfo);
        
        listItem.appendChild(editBtn);
        listItem.appendChild(continueBtn);

        infoList.appendChild(listItem);

        firstName.value= '';
        lastName.value= '';
        dateInElement.value= '';
        dateOutElement.value= '';
        peopleCount.value= ''
    
        nextBtn.disabled= true;

        editBtn.addEventListener('click', (e) => {
        
        firstName.value= nameInfo.textContent.split('Name: ').join('').split(' ')[0];
        lastName.value= nameInfo.textContent.split('Name: ').join('').split(' ')[1];
        dateInElement.value= dateInInfo.textContent.split('From date: ').join('');
        dateOutElement.value= dateOutInfo.textContent.split('To date: ').join('');
        peopleCount.value= peopleCountInfo.textContent.match(/[0-9]+/g);

        infoList.removeChild(listItem);
        nextBtn.disabled= false;
        });

        continueBtn.addEventListener('click', (e) => {
        let clonedNode= listItem.cloneNode(true);
        let confirmBtn= clonedNode.getElementsByClassName('edit-btn')[0];
        let cancelBtn= clonedNode.getElementsByClassName('continue-btn')[0];

        confirmBtn.textContent= 'Confirm';
        confirmBtn.className= 'confirm-btn';
        cancelBtn.textContent= 'Cancel';
        cancelBtn.className= 'cancel-btn';
        
        confirmList.appendChild(clonedNode);
        infoList.removeChild(listItem);

        confirmBtn.addEventListener('click', (e) => {
            confirmList.removeChild(clonedNode);
            nextBtn.disabled= false;
            verificationElement.className= 'reservation-confirmed';
            verificationElement.textContent= 'Confirmed.'
        });

        cancelBtn.addEventListener('click', (e) => {
            confirmList.removeChild(clonedNode);
            nextBtn.disabled= false;
            verificationElement.className= 'reservation-cancelled';
            verificationElement.textContent= 'Cancelled.'
        });
        })
        e.preventDefault();
            }
        }
    })
}
