let isEmpty = (object) => {
  for (let prop in object) {
    if (
      object[prop] === '' ||
      object[prop] === null ||
      isNaN(object[prop]) ||
      object[prop] === undefined
    ) {
      continue;
    }

    return false;
  }

  return true;
};

const data = { a: 1, b: undefined };
const data2 = { a: undefined };
isEmpty(data); // false
isEmpty(data2); // true
