import { ages, companies } from './main.js';

// old way
let sortedCompanies = companies.sort((c1, c2) => {
  if (c1.start > c2.start) {
    return 1;
  }
  return -1;
});
console.log(sortedCompanies);

// new way
sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

// elements are sorted by the first digit of each element
let sortAges = ages.sort();
console.log(sortAges);

// elements are correctly sorted
sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);
