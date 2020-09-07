const bookList = document.querySelector('#book-list');

console.log('The parent node is: ', bookList.parentNode);
console.log('The parent node is: ', bookList.parentElement);
console.log('2 levels up: ');
console.log('The parent node is: ', bookList.parentElement.parentElement);

console.log('The child nodes are: ');
console.log(bookList.childNodes);

console.log('The child nodes without the line brakes: ');
console.log(bookList.children);
