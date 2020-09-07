const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', (e) => {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms['add-book']);

// add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value } = addForm.querySelector('input[type="text"]');
  console.log(value);
});
