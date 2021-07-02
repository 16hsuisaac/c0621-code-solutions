/* exported reverseWord */
function reverseWord(word) {
  var reversedWord = '';
  for (var i = (word.length - 1); i >= 0; i--) {
    reversedWord = reversedWord + word[i];
  }
  return reversedWord;
}

/* set up empty variable to push letters into,
run through each letter backwards,
add each letter to the empty string,
return string */
