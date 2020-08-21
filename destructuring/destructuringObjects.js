const Sally = {
  name: 'Sally',
  age: 32,
  address: {
    city: 'San Francisco',
    state: 'California',
  },
};

const John = {
  name: 'John',
  age: 34,
  address: {
    city: 'Denver',
    state: 'Colorado',
  },
};

// destructure the object
const { name, age } = Sally;
console.log(name);
console.log(age);

// destructure the object & create a new variable
const { name: firstname } = John;
console.log(firstname);

// default values -> variable isn't specified, so variable set to 'Rice'
const { favoriteFood = 'Rice' } = Sally;
console.log(favoriteFood);

// retrieve a nested object variable
const {
  address: { city },
} = Sally;

console.log(city);

// merge 2 objects
const person3 = { ...Sally, ...John };
console.log(person3);

// old way
function printUserOldWay(user) {
  console.log(`Name is ${user.name}. Age is ${user.age}.`);
}

printUserOldWay(John);

// new way
function printUserNewWay({ name, age, favFood = 'watermelon' }) {
  console.log(`Name is ${name}. Age is ${age}. Fav food is ${favFood}.`);
}

printUserNewWay(Sally);
