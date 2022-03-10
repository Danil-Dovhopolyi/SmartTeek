/**
 * Implement function countWords:
 *
 * Function takes a text without punctuation marks and returns the number of
 * words in the given text. Words are separated by one or many whitespaces.
 * Also, whitespaces can appear at the beginning and end of the text.
 *
 * e.g. for `text = '   You  area programmer '` it should return `3`.
 *
 * @param {string} text
 *
 * @return {number}
 */

function countWords(text) {
  let quantityWord = text.split(' ');
  let count = 0;
  for (i = 0; i < quantityWord.length; i++) {
    if (quantityWord[i] != '') {
      count += 1;
    }
  }
  return count;
}
