import { ages, companies } from './main.js';

console.log('filter -> old way');

// identify all the people who are 21 years or older
const canDrink = [];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

console.log(canDrink);

console.log('filter -> new way');

// only retain those results which are 21 or greater
const canDrinkFilter = ages.filter((age) => age >= 21);

console.log(canDrinkFilter);

// filter out all non-retail companies
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);

console.log(retailCompanies);

// filter out all non-1980's companies
const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start <= 1989
);
console.log(eightiesCompanies);

// get companies that lasted 10 years or more
const tenYearsOldorMore = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(tenYearsOldorMore);
