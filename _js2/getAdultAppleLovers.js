let forEach = (array, func) => {
  for (let i of array) {
    func(i);
  }
};

let map = (array, func) => {
  let result = [];

  forEach(array, (x) => result.push(func(x)));

  return result;
};

let filter = (array, func) => {
  let result = [];

  forEach(array, (x) => (func(x) ? result.push(x) : {}));

  return result;
};

const data = [
  {
    _id: '5b5e3168c6bf40f2c1235cd6',
    index: 0,
    age: 39,

    eyeColor: 'green',
    name: 'Stein',
    favoriteFruit: 'apple',
  },
  {
    _id: '5b5e3168e328c0d72e4f27d8',
    index: 1,
    age: 38,
    eyeColor: 'blue',
    name: 'Cortez',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '5b5e3168cc79132b631c666a',
    index: 2,
    age: 2,
    eyeColor: 'blue',
    name: 'Suzette',
    favoriteFruit: 'apple',
  },
  {
    _id: '5b5e31682093adcc6cd0dde5',
    index: 3,
    age: 17,
    eyeColor: 'green',
    name: 'Weiss',
    favoriteFruit: 'banana',
  },
];
const getAdultAppleLovers = (data) => {
  return map(
    filter(data, (x) => x.age > 18 && x.favoriteFruit === 'apple'),
    (y) => y.name
  );
};
