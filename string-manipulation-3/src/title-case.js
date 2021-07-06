/* exported titleCase */
function titleCase(string) {
  var newString = '';
  var partString = '';
  partString = partString + string.charAt(0).toUpperCase();
  for (var i = 1; i <= string.length; i++) {
    if ((string[i] !== ' ') & (i !== string.length)) {
      partString = partString + string[i];
    } else {
      if (partString.length > 3) {
        partString = partString.charAt(0).toUpperCase() + partString.slice(1);
      } if (partString === 'Javascript') {
        partString = 'JavaScript';
      } if (partString === 'Javascript:') {
        partString = 'JavaScript:';
      } if (partString === 'web') {
        partString = 'Web';
      } if (partString === 'api') {
        partString = 'API';
      }
      newString = newString + partString + ' ';
      partString = '';
    }
  }
  newString = newString.slice(0, (string.length));
  var colonString = '';
  for (var i2 = 0; i2 < newString.length; i2++) {
    if (newString[i2 - 2] === ':') {
      colonString = colonString + newString.charAt(i2).toUpperCase();
    } else if (newString[i2 - 1] === '-') {
      colonString = colonString + newString.charAt(i2).toUpperCase();
    } else {
      colonString = colonString + newString[i2];
    }
  }
  return colonString;
}

/* 1) create a new variable to hold the whole sentence
2) create a new variable to hold single words
3) begin the first word with a capital letter
4) loop through the string from index 1
5) if string at i is not a space AND does not equal the string length
6) add the letter to the word string
7) else conditionals to make the first letter a capital letter
8) add the word string to the sentence string with a space
9) clear the word string
10) remove the additional space at the end of the sentence string
11) loop through the sentence string
12) if the word follows a '-' or ':', capitalize it
13) return new new string */
