/* exported numVowels */
function numVowels(string) {
  var number = 0;
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
      number = number + 1;
    } if (string[i] === 'e') {
      number = number + 1;
    } if (string[i] === 'i') {
      number = number + 1;
    } if (string[i] === 'o') {
      number = number + 1;
    } if (string[i] === 'u') {
      number = number + 1;
    }
  }
  return number;
}

/* 1) create new number variable set to 0
2) make all letters in string lowercase
3) loop through all the letters
4) if letter is a vowel, add one to the number variable
5) return number variable */
