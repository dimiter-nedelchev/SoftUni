window.addEventListener("load", solve);

function solve() {
  
  const firstNameElement= document.getElementById('first-name');
  const lastNameElement= document.getElementById('last-name');
  const ageElement= document.getElementById('age');
  const storyTitleElement= document.getElementById('story-title');
  const storyTextElement= document.getElementById('story')
  const genreElement= document.getElementById('genre');
  const publishBtn= document.getElementById('form-btn');

  const previewList= document.getElementById('preview-list');
  const mainDivElement= document.getElementById('main');
  const mainChild= document.getElementsByClassName('form-wrapper')[0];
  const secondChild= document.getElementById('side-wrapper');

  publishBtn.addEventListener('click', (e) => {
      
    if(firstNameElement.value && lastNameElement.value && ageElement.value && storyTitleElement.value && storyTextElement.value) {
      
      let listElement= document.createElement('li');
      listElement.className= 'story-info';

      let articleElement= document.createElement('article');
      
      let fullName= document.createElement('h4');
      fullName.textContent= `Name: ${firstNameElement.value} ${lastNameElement.value}`;

      let age= document.createElement('p');
      age.textContent= `Age: ${ageElement.value}`

      let title= document.createElement('p');
      title.textContent= `Title: ${storyTitleElement.value}`;

      let genre= document.createElement('p');
      genre.textContent= `Genre: ${genreElement.value}`;

      let storyText= document.createElement('p');
      storyText.textContent= storyTextElement.value

      articleElement.appendChild(fullName);
      articleElement.appendChild(age);
      articleElement.appendChild(title);
      articleElement.appendChild(genre);
      articleElement.appendChild(storyText);
      
      let saveBtn= document.createElement('button');
      saveBtn.className= 'save-btn'
      let editBtn= document.createElement('button');
      editBtn.className= 'edit-btn'
      let deleteBtn= document.createElement('button');
      deleteBtn.className= 'delete-btn';
      
      saveBtn.textContent= 'Save Story';
      editBtn.textContent= 'Edit Story';
      deleteBtn.textContent= 'Delete Story';
      
      listElement.appendChild(articleElement);
      listElement.appendChild(saveBtn);
      listElement.appendChild(editBtn);
      listElement.appendChild(deleteBtn);
      
      previewList.appendChild(listElement);

      let firstNameInfo= firstNameElement.value;
      let lastNameInfo= lastNameElement.value;
      let ageInfo= ageElement.value;
      let titleInfo= storyTitleElement.value;
      let genreInfo= genreElement.value;
      let storyTextInfo= storyTextElement.value;

      firstNameElement.value= '';
      lastNameElement.value= '';
      ageElement.value= '';
      storyTextElement.value= '';
      storyTitleElement.value= '';
      genreElement.value= '';

      publishBtn.disabled= true;

      saveBtn.addEventListener('click', () => {
        
        mainDivElement.removeChild(mainChild);
        mainDivElement.removeChild(secondChild);

        let message= document.createElement('h1');
        message.textContent= 'Your scary story is saved!';

        mainDivElement.appendChild(message);
      });

      deleteBtn.addEventListener('click', () => {
        previewList.removeChild(listElement);
        publishBtn.disabled= false;
      });

      editBtn.addEventListener('click', () => {
        firstNameElement.value= firstNameInfo;
        lastNameElement.value= lastNameInfo;
        ageElement.value= ageInfo;
        storyTextElement.value= storyTextInfo;
        storyTitleElement.value= titleInfo;
        genreElement.value= genreInfo;

        previewList.removeChild(listElement);

        publishBtn.disabled= false;
      });
    }
  });
}
