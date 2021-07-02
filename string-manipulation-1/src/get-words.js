/* exported getWords */
function getWords(string) {
  var words = [];
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      word = word + string[i];
    } if (string[i] === ' ' || (i === (string.length - 1))) {
      words.push(word);
      word = '';
    }
  }
  return words;
}

/* set up an empty array to push words into,
declare new variable to hold previous letters,
loop through every letter in the string looking for ' ',
if the letter !== ' ', add it to the variable holding previous letters,
if the letter === ' ' OR if it's the end of the string, push the existing string to the array and reset the existing string to equal '',
 */
