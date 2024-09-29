const toDoList = [];
renderToDoList();
function addToDo() {
  const inputElement = document.querySelector('.js-todoName');
  let name = inputElement.value;
  const inputDateElement = document.querySelector('.js-todoDate');
  let date = inputDateElement.value;
  const toDoItem = {
    name,
    date
  };
  toDoList.push(toDoItem);
  //console.log(toDoList);
  inputElement.value = '';
  inputDateElement.value = '';
  renderToDoList();
}

function renderToDoList() {
  let toDoHtml = ``;
  for (let i = 0; i < toDoList.length; i++) {
    //const toDo = toDoList[i];
    const toDoObject = toDoList[i];
    const { name, date } = toDoObject;
    //console.log(toDoObject);
    const html = `
      <div class="js-display-row">
      <p class="js-display-text">
        ${name}
        </p>
      <p class="js-display-text">
        ${date}   
        </p>
        <button class="js-normal-button js-delete-button" onclick="
          toDoList.splice(${i}, 1);
          renderToDoList();">Delete</button>
      </div>`;

    toDoHtml += html;
  }
  document.querySelector('.js-display-container').innerHTML = toDoHtml;
}

function deleteItem() {
  let toDoHtml = ``
}