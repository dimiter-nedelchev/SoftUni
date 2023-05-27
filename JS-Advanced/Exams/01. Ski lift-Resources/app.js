window.addEventListener('load', solve);

function solve() {
   const firstNameEl= document.getElementById('first-name');
   const lastNameEl= document.getElementById('last-name');
   const peopleCountEl= document.getElementById('people-count');
   const dateEl= document.getElementById('from-date');
   const daysCountEl= document.getElementById('days-count');

   const nextBtn= document.getElementById('next-btn');

   const ticketInfoList= document.getElementsByClassName('ticket-info-list')[0];
   const confirmTicket= document.getElementsByClassName('confirm-ticket')[0];

   const mainEl= document.getElementById('main');
   const body= document.getElementById('body')

   nextBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(firstNameEl.value !== '' && lastNameEl.value !== '' && peopleCountEl.value !== '' && dateEl.value !== '' && daysCountEl.value !== ''){
        
        let listItem= document.createElement('li');
        listItem.setAttribute('class', 'ticket');

        let articleItem= document.createElement('article');
        
        let h3= document.createElement('h3');
        h3.textContent= `Name: ${firstNameEl.value} ${lastNameEl.value}`;

        let pDate= document.createElement('p');
        pDate.textContent= `From date: ${dateEl.value}`;

        let pDaysCount= document.createElement('p');
        pDaysCount.textContent= `For ${daysCountEl.value} days`;

        let pPeopleCount= document.createElement('p');
        pPeopleCount.textContent= `For ${peopleCountEl.value} people`;

        let editBtn= document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent= 'Edit';

        let continueBtn= document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent= 'Continue';

        articleItem.appendChild(h3);
        articleItem.appendChild(pDate);
        articleItem.appendChild(pDaysCount);
        articleItem.appendChild(pPeopleCount);

        listItem.appendChild(articleItem);
        listItem.appendChild(editBtn);
        listItem.appendChild(continueBtn);

        ticketInfoList.appendChild(listItem);

        let firstName= firstNameEl.value;
        let lastName= lastNameEl.value;
        let people= peopleCountEl.value;
        let date= dateEl.value;
        let days= daysCountEl.value;

        firstNameEl.value= '';
        lastNameEl.value= '';
        peopleCountEl.value= '';
        dateEl.value= '';
        daysCountEl.value= '';

        nextBtn.disabled= true;

        editBtn.addEventListener('click', (e) => {
            firstNameEl.value= firstName;
            lastNameEl.value= lastName;
            peopleCountEl.value= people;
            dateEl.value= date;
            daysCountEl.value= days;

            ticketInfoList.removeChild(listItem);

            nextBtn.disabled= false;
        });

        continueBtn.addEventListener('click', (e) => {
            let article= listItem.querySelector('article');
            let clonedArticle= article.cloneNode(true);

            let confirmBtn= document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent= 'Confirm';

            let cancelBtn= document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent= 'Cancel';

            let confirmLi= document.createElement('li');

            confirmLi.appendChild(clonedArticle);
            confirmLi.appendChild(confirmBtn);
            confirmLi.appendChild(cancelBtn);

            confirmTicket.appendChild(confirmLi);

            ticketInfoList.removeChild(listItem);

            cancelBtn.addEventListener('click', (e) => {
                confirmTicket.removeChild(confirmLi);

                nextBtn.disabled= false;
            })

            confirmBtn.addEventListener('click', (e) => {

                let h1= document.createElement('h1');
                h1.setAttribute('id', 'thank-you');
                h1.textContent= "Thank you, have a nice day! ";

                let backBtn= document.createElement('button');
                backBtn.setAttribute('id', 'back-btn');
                backBtn.textContent= 'Back';

                body.appendChild(h1);
                body.appendChild(backBtn);

                backBtn.addEventListener('click', (e) => {
                    body.appendChild(mainEl);
                    nextBtn.disabled= false;
                    confirmTicket.removeChild(confirmLi);

                    body.removeChild(h1);
                    body.removeChild(backBtn);
                })

                mainEl.remove();
            })
        })

    }
   })
}


    
    
