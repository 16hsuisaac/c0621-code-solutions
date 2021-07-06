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
  return newString;
}
