/**
 * Implement function toDigitArray:
 *
 * Function takes a natural number N and returns an array with its digits in
 * order from least significant to most significant. Least significant means the
 * last digit in a number and most significant means the first one.
 *
 * e.g. for N = 46156 it should return [6, 5, 1, 6, 4]. Make sure all items
 * in returned arrays are numbers. ['6', '5', '1', '6', '4'] is wrong answer.
 *
 * @param {number} N
 *
 * @return {number[]}
 */
function toDigitArray(N) {
  let str = N.toString();
  let strArray = str.split('').reverse();
  return strArray.map((string) => parseFloat(string));
}
