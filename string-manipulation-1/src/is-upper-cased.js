/* exported isUpperCased */
function isUpperCased(word) {
  var bool = false;
  if (word === word.toUpperCase()) {
    bool = true;
  }
  return bool;
}

/* Set variable to equal false as a default,
compare word to itself made to be all capitalized,
if true then all letters are capitalized and change the variable to be true,
else return false as the word must not all be capitalized */
