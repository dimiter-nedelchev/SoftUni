window.addEventListener("load", solve);

function solve() {
    const titleElement= document.getElementById('post-title');
    const categoryElement= document.getElementById('post-category');
    const contentElement= document.getElementById('post-content');

    const publishBtn= document.getElementById('publish-btn');
    const clearBtn= document.getElementById('clear-btn');

    const reviewContainer= document.getElementById('review-list');
    const uploadedContainer= document.getElementById('published-list');

    publishBtn.addEventListener('click', (e) => {
       e.preventDefault()
      if(titleElement.value && categoryElement.value && contentElement.value){
          
        let listElement= document.createElement('li');
        listElement.setAttribute('class', 'rpost');

        let articleElement= document.createElement('article');

        let titleData= document.createElement('h4');
        titleData.textContent= titleElement.value;

        let categoryData= document.createElement('p');
        categoryData.textContent= `Category: ${categoryElement.value}`;

        let contentData= document.createElement('p');
        contentData.textContent= `Content: ${contentElement.value}`;

        let editBtn= document.createElement('button');
        editBtn.setAttribute('class', 'action-btn edit');
      
        editBtn.textContent= 'Edit';

        let approveBtn= document.createElement('button');
        approveBtn.setAttribute('class', 'action-btn approve');
        
        approveBtn.textContent= 'Approve';
        
        let title= titleElement.value;
        let content= contentElement.value;
        let category= categoryElement.value;
        
        titleElement.value= '';
        contentElement.value= '';
        categoryElement.value= '';

        articleElement.appendChild(titleData);
        articleElement.appendChild(categoryData);
        articleElement.appendChild(contentData);

        listElement.appendChild(articleElement);
        listElement.appendChild(approveBtn);
        listElement.appendChild(editBtn);

        reviewContainer.appendChild(listElement);

        editBtn.addEventListener('click', (e) => {
          
          titleElement.value= title;
          contentElement.value= content;
          categoryElement.value= category;

          reviewContainer.removeChild(listElement);
        });

        approveBtn.addEventListener('click', (e) => {

          let clonedNode= listElement.cloneNode(true);
          let edit= clonedNode.querySelector('button.action-btn.edit');
          let approve= clonedNode.querySelector('button.action-btn.approve');

          clonedNode.removeChild(edit);
          clonedNode.removeChild(approve);

          uploadedContainer.appendChild(clonedNode);
          reviewContainer.removeChild(listElement);

          clearBtn.addEventListener('click', (e) => {
            uploadedContainer.removeChild(clonedNode);
          })
        })
      }
    })
}
