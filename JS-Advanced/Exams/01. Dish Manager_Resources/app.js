window.addEventListener("load", solve);

function solve() {
    const firstNameElement= document.getElementById('first-name');
    const lastNameElement= document.getElementById('last-name');
    const ageElement= document.getElementById('age');
    const genderElement= document.getElementById('genderSelect');
    const taskElement= document.getElementById('task');

    const submitBtn= document.getElementById('form-btn');

    const inProgress= document.getElementById('in-progress');
    const finishedCooking= document.getElementById('finished');
    const clearBtn= document.getElementById('clear-btn');

    const counter= document.getElementById('progress-count');

    submitBtn.addEventListener('click', (e) => {
      if(firstNameElement.value && lastNameElement.value && ageElement.value && taskElement.value){
          
        let listElement= document.createElement('li');
        listElement.className= 'each-line';

        let articleElement= document.createElement('article');

        let fullName= document.createElement('h4');
        fullName.textContent= `${firstNameElement.value} ${lastNameElement.value}`;

        let ageGender= document.createElement('p');
        ageGender.textContent= `${genderElement.value}, ${ageElement.value}`;

        let dishDescription= document.createElement('p');
        dishDescription.textContent= `Dish description: ${taskElement.value}`

        let editBtn= document.createElement('button');
        editBtn.className= 'edit-btn'
        editBtn.textContent= 'Edit';

        let markBtn= document.createElement('button');
        markBtn.className= 'complete-btn'
        markBtn.textContent= 'Mark as complete';

        articleElement.appendChild(fullName);
        articleElement.appendChild(ageGender);
        articleElement.appendChild(dishDescription);
        listElement.appendChild(articleElement);
        listElement.appendChild(editBtn);
        listElement.appendChild(markBtn);

        inProgress.appendChild(listElement);

        let firstName= firstNameElement.value;
        let lastName= lastNameElement.value;
        let task= taskElement.value;
        let age= ageElement.value;
        let gender= genderElement.value;

        firstNameElement.value= '';
        lastNameElement.value= '';
        ageElement.value= '';
        taskElement.value= '';
        genderElement.value= '';

        counter.textContent= 1;

        editBtn.addEventListener('click', (e) => {
          firstNameElement.value= firstName;
          lastNameElement.value= lastName;
          ageElement.value= age;
          genderElement.value= gender;
          taskElement.value= task;

          counter.textContent= 0;

          inProgress.removeChild(listElement);
        });

        markBtn.addEventListener('click', () => {
          let clonedNode= listElement.cloneNode(true);
          let edit= clonedNode.querySelector('button.edit-btn');
          let complete= clonedNode.querySelector('button.complete-btn');

          clonedNode.removeChild(edit);
          clonedNode.removeChild(complete);

          inProgress.removeChild(listElement);

          finishedCooking.appendChild(clonedNode);

          counter.textContent= 0;

          clearBtn.addEventListener('click', (e) => {
            finishedCooking.removeChild(clonedNode);
          })
        })
      }
    })
}
