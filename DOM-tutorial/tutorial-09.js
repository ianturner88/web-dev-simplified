const h2 = document.querySelector('#book-list h2');

h2.addEventListener('click', (e) => {
  console.log(e.target);
  console.log(e);
});

const buttons = document.querySelectorAll('#book-list .delete');

Array.from(buttons).forEach((button) => {
  //  add an event listener to every li tag
  //  and delete the parent's li tags

  button.addEventListener('click', (e) => {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  });
});
