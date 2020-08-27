// old way
function sum1(a, b) {
  return a + b;
}
// new way
const sum2 = (a, b) => a + b;

// old way
function isPositive1(number) {
  return number >= 0;
}
// new way
const isPositive2 = (number) => number >= 0;

// old way
function randomNumber() {
  return Math.random;
}
//new way
const randomNumber = () => Math.random;

//old way
document.addEventListener('click', function () {
  console.log('Click');
});
//new way
document.addEventListener('click', () => console.log('Click'));
