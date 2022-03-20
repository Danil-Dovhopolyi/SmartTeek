/**
 * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObj - объект с примитивными значениями
 * @param {Object<string | number>} secondObj - объект с примитивными значениями
 * @returns {Object}
 */

let intersection = (firstObject, secondObject) => {
  const firstObjKeys = Object.keys(firstObject);

  return firstObjKeys.reduce((accumulator, key) => {
    if (firstObject[key] === secondObject[key]) {
      accumulator = {
        ...accumulator,
        [key]: firstObject[key],
      };
    }
    return accumulator;
  }, {});
};

const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
intersection(data, data2); // { b: 2 }
