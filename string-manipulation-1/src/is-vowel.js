/* exported isVowel */
function isVowel(char) {
  var isVowel = false;
  var makeCapital = char.toUpperCase();
  if (makeCapital === 'A') {
    isVowel = true;
  } if (makeCapital === 'E') {
    isVowel = true;
  } if (makeCapital === 'I') {
    isVowel = true;
  } if (makeCapital === 'O') {
    isVowel = true;
  } if (makeCapital === 'U') {
    isVowel = true;
  }
  return isVowel;
}

/* variable default set to false until proven to be a vowel,
convert char to upper case as vowels will remain vowels regardless of case,
check if char is stricly equal to each of the capital vowels,
if so then variable = true, else false is correct */
