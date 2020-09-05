// type document into the console to get the entire html file
document;

// grabs the node of page-banner
document.getElementById('page-banner');

// grabs classname elements
const titles = document.getElementsByClassName('title');

const banner = document.getElementById('page-banner');

const bookList = document.getElementById('book-list');

titles = document.getElementsByClassName('title');
for (i = 0; i < titles.length; i++) {
  console.log(titles[i]);
}
