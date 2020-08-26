import { ages, companies } from './main.js';

// create array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

const testMap = companies.map(
  (company) => `${company.name}[${company.start} - ${company.end}]`
);
console.log(testMap);

const agesSquare = ages.map((age) => Math.sqrt(age));
console.log(agesSquare);

const agesTimesTwo = ages.map((age) => age * 2);
console.log(agesTimesTwo);
