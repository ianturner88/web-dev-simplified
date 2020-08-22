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

const canDrinkFilter = ages.filter((age) => age >= 21);

console.log(canDrinkFilter);
