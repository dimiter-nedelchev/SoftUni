function solve() {

    const recipientEl= document.getElementById('recipientName');
    const titleEl= document.getElementById('title');
    const messageBoxEl= document.getElementById('message');

    const addBtn= document.getElementById('add');
    const resetBtn= document.getElementById('reset');

    const emailListEl= document.getElementById('list');
    const sentMailsEl= document.getElementsByClassName('sent-list')[0];
    const deletedMailsEl= document.getElementsByClassName('delete-list')[0];
    
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

    if(titleEl.value && messageBoxEl.value && recipientEl.value){
        
        let listItem= document.createElement('li');
        
        let titleData= document.createElement('h4');
        titleData.textContent= `Title: ${titleEl.value}`;

        let recipientData= document.createElement('h4');
        recipientData.textContent= `Recipient Name: ${recipientEl.value}`;

        let messageData= document.createElement('span');
        messageData.textContent= messageBoxEl.value;

        let buttonDiv= document.createElement('div');
        buttonDiv.setAttribute('id', 'list-action');

        let sendBtn= document.createElement('button');
        sendBtn.setAttribute('id', 'send');
        sendBtn.setAttribute('type', 'submit');
        sendBtn.textContent= 'Send';

        let deleteBtn= document.createElement('button');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.textContent= 'Delete';

        buttonDiv.appendChild(sendBtn);
        buttonDiv.appendChild(deleteBtn);

        listItem.appendChild(titleData);
        listItem.appendChild(recipientData);
        listItem.appendChild(messageData);
        listItem.appendChild(buttonDiv);

        emailListEl.appendChild(listItem);

        let title= titleEl.value;
        let recipient= recipientEl.value;

        titleEl.value= '';
        recipientEl.value= '';
        messageBoxEl.value= '';

        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();

            let listEl= document.createElement('li');
            
            let spanRecipient= document.createElement('span');
            spanRecipient.textContent= `To: ${recipient}`;
            
            let spanTitle= document.createElement('span');
            spanTitle.textContent= `Title: ${title}`;

            let buttonDiv= document.createElement('div');
            buttonDiv.setAttribute('class', 'btn')
            
            let deleteBtnOnSend= document.createElement('button');
            deleteBtnOnSend.setAttribute('class', 'delete');
            deleteBtnOnSend.setAttribute('type', 'submit');
            deleteBtnOnSend.textContent= 'Delete'

            buttonDiv.appendChild(deleteBtnOnSend);

            listEl.appendChild(spanRecipient);
            listEl.appendChild(spanTitle);
            listEl.appendChild(buttonDiv);

            sentMailsEl.appendChild(listEl);

            emailListEl.removeChild(listItem);

            deleteBtnOnSend.addEventListener('click', (e) => {
                e.preventDefault();

                let listItem= document.createElement('li');
                
                let spanTitle= document.createElement('span');
                spanTitle.textContent= `Title: ${title}`;

                let spanRecipient= document.createElement('span');
                spanRecipient.textContent= `To: ${recipient}`;

                listItem.appendChild(spanRecipient);
                listItem.appendChild(spanTitle);
            
                deletedMailsEl.appendChild(listItem);
            
                sentMailsEl.removeChild(listEl);
            })


        });

        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();

            let listItemOnDelete= document.createElement('li');
            
            let spanTitle= document.createElement('span');
            spanTitle.textContent= `Title: ${title}`;

            let spanRecipient= document.createElement('span');
            spanRecipient.textContent= `To: ${recipient}`;

            listItemOnDelete.appendChild(spanRecipient);
            listItemOnDelete.appendChild(spanTitle);
           
            deletedMailsEl.appendChild(listItemOnDelete);
            
            emailListEl.removeChild(listItem);
        })
    }
        
    })

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();

        titleEl.value= '';
        recipientEl.value= '';
        messageBoxEl.value= '';
    })

}
solve()