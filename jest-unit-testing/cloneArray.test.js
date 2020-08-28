const cloneArray = require('./cloneArray');

test('properly clones input array', () => {
  const array = [1, 2, 78];
  // checks the arrays are the same
  expect(cloneArray(array)).toEqual(array);
  // checks the arrays are two distinct arrays
  expect(cloneArray(array)).not.toBe(array);
});
