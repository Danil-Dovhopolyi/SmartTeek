export function getRandomValue() {
  let set = new Set();
  let arrayNumbers = [];
  while (set.size !== 15) {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    set.add(randomNumber);
  }
  arrayNumbers.push(...set, ...set);
  return arrayNumbers;
}
