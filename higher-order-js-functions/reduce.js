import { ages, companies } from './main.js';

// old way
let ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// new way
ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// total years all companies have been in existance
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYears);
