const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

// first 2 elements
const [a, b] = alphabet;
// first & third element
const [a1, , c1] = alphabet;

console.log(a1);
console.log(c1);

// spread operator
const [aNum, bNumb, ...rest] = numbers;

console.log(rest);

// merge arrays together
const newArray = [...alphabet, ...numbers];
console.log(newArray);

// concatenate
const concatenateArray = alphabet.concat(numbers);

function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

const array = sumAndMultiply(2, 3);
console.log(array);

// destructure the return from sumAndMultiply
const [sum, multiply] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multiply);
