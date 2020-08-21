const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

// first 2 elements
const [a, b] = alphabet;

console.log(a);
console.log(b);

// spread operator
const [aNum, bNumb, ...rest] = numbers;

console.log(rest);

// merge arrays together
const newArray = [...alphabet, ...numbers];
console.log(newArray);

// concatenate
const concatenateArray = alphabet.concat(numbers);
