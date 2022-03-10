let forEach = (array, func) => {
  for (let i of array) {
    func(i);
  }
};

forEach([1, 2, 3], console.log);

let map = (array, func) => {
  let result = [];

  forEach(array, (x) => result.push(x));

  return result;
};

console.log(map([1, 2, 3], (x) => x * 2));

let filter = (array, func) => {
  let result = [];

  forEach(array, (x) => {
    if (func(x)) {
      result.push(x);
    }
  });
  return result;
};

console.log(filter([2, 5, 1, 3, 8, 6], (x) => x > 3));
