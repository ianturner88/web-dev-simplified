const list = document.querySelector('#book-list ul');

// hide box
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', (e) => {
  if (hideBox.checked) {
    list.style.display = 'none';
  } else {
    list.style.display = 'initial';
  }
});
