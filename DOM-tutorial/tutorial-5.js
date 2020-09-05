const books = document.querySelectorAll('#book-list li .name');

setTimeout(
  () =>
    Array.from(books).forEach((book) => {
      console.log(book.textContent);
    }),
  3000
);

// Array.from(books).forEach((book) => {
//   book.textContent += ' (book title)';
// });

setTimeout(
  () =>
    Array.from(books).forEach((book) => {
      book.textContent += ' (book title)';
    }),
  3000
);

console.log('Halifax');
const bookList = document.querySelector('#book-list');
console.log(bookList.innerHTML);

bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML</p>';
