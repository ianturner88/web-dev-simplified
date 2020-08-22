const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

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

const canDrinkFilter = ages.filter((age) => {
  if (age > 20) {
    return true;
  }
});

console.log(canDrinkFilter);
