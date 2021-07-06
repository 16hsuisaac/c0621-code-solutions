/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var anagramVariable = true;
  var firstArray = [];
  var secondArray = [];
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstArray.push(firstString[i]);
    }
  }
  for (var i2 = 0; i2 < secondString.length; i2++) {
    if (secondString[i2] !== ' ') {
      secondArray.push(secondString[i2]);
    }
  }
  firstArray = firstArray.sort();
  secondArray = secondArray.sort();
  if (firstArray.length !== secondArray.length) {
    anagramVariable = false;
  }
  for (var i3 = 0; i3 < firstArray.length; i3++) {
    if (firstArray[i3] !== secondArray[i3]) {
      anagramVariable = false;
    }
  }
  return anagramVariable;
}

/* 1) create bool default to true for anagram
2) create empty array for first string
3) create empty array for second string
4) for each letter in first string, push it into array unless ' '
5) for each letter in second string, push it into array unless ' '
6) sort first array
7) sort second array
8) if first and second array are different lengths, bool is false
9) if any of the characters in array one and two dont match, return false
10) return bool */
