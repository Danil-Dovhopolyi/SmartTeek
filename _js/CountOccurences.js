/**
 * Implement function countOccurrences:
 *
 * Implement function which takes two params (`str`, `substr`) and returns the
 * number of times the `substr` appears in `str`.
 *
 * e.g. for str = 'azyxxzyzy', substr = 'zy' it should return 3, because 'zy'
 * appears 3 times: 'a[zy]xx[zy][zy]'.
 *
 * str and substr contains only lowercase alphabetical letters. substr
 * doesn't contain repeating letters (substr can't be equal xyx)
 *
 * countOccurrences(azyxxzyzy, zy) === 3
 * countOccurrences(ababagalamaga, ba) === 2
 *
 * @param {string} str
 * @param {string} substr
 *
 * @return {number}
 */

function countOccurrences(str, substr) {
  return (str = str.split(substr).length - 1);
}
console.log(countOccurrences('xababagalamaga', 'ba'));
