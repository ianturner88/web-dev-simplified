const wrap = document.querySelector('#wrapper');

console.log(wrap);

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

let books = document.querySelector('#book-list li .name');
console.log(books);
books = document.querySelectorAll('#book-list li .name');
console.log(books);

console.log('Halifax');
Array.from(books).forEach((book) => {
  console.log(book);
});
