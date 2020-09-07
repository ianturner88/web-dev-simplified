document.forms;
console.log(document.forms);

console.log('1:');
console.log(document.forms[0]);
console.log('2:');
console.log(document.forms['add-book']);

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value } = addForm.querySelector('input[type="text"]');

  // create li & span tags
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteButton = document.createElement('span');

  // add content
  deleteButton.textContent = 'delete';
  bookName.textContent = value;

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteButton);
  list.appendChild(li);
});
