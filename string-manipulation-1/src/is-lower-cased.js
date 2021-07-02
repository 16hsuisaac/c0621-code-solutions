/* exported isLowerCased */
function isLowerCased(word) {
  var lowerCase = false;
  if (word === word.toLowerCase()) {
    lowerCase = true;
  }
  return lowerCase;
}

/* set variable to be default false,
if word is equal to itself made to be fully lower case then it must be lower case,
change variable to true,
else return default as it must be false */
