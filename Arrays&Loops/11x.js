const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
renderList(toDoList);
function addItem() {
  const inputElement = document.querySelector('.js-textbox');
  const item = inputElement.value;
  const inputDate = document.querySelector('.js-datebox');
  const date = inputDate.value;
  toDoList.push({
    item,
    date
  });
  renderList(toDoList);
  saveInStorage();
  inputElement.value = '';
  inputDate.value = '';
}
function renderList(toDoList) {
  let displayHtml = ``;
  for (let i = 0; i < toDoList.length; i++) {
    const { item, date } = toDoList[i];
    displayHtml += `<p class="js-display-text">${item}</p>
                    <p class="js-display-text">${date}</p>
                    <button class="js-deleteButton" onclick="toDoList.splice(${i}, 1);
                    renderList(toDoList);
                    saveInStorage();
                    ">Delete</button>`;
  }
  document.querySelector('.js-display-div').innerHTML = displayHtml;
}

function saveInStorage() {
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

