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

// destructure the object &
const { name: firstname } = John;
console.log(firstname);
