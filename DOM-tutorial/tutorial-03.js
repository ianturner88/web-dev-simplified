// Tutorial #3
const titles = document.getElementsByClassName('title');

// doesn't work b/c titles isn't an array
// titles.forEach((item) => {
//   console.log(item);
// });

console.log(Array.isArray(titles));

// converts titles to an array
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach((item) => {
  console.log(item);
});
