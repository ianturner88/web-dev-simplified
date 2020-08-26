import { companies, ages } from './main.js';

// standard for loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

console.log('forEach');

// for each
// apply forEach to the object companies --> outputs all nested objects
companies.forEach((company) => {
  console.log(company);
});

// only output the names of the companies
companies.forEach((company) => {
  console.log(company.name);
});
