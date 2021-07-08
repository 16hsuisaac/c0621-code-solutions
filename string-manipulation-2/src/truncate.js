/* exported truncate */
function truncate(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (i >= (string.length)) {
      i = length;
    } else {
      newString = newString + string[i];
    }
  }
  newString = newString + '...';
  return newString;
}

/* 1) create empty string to add letters into
2) loop through the given string for the given length, incrementing by 1
3) escape the loop if i >= length of the string to account for words shorter than the length
4) else add string at i value to the new string
5) concatenate new string with '...'
6) return new string */
