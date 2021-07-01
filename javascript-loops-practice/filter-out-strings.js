/* exported filterOutStrings */
function filterOutStrings(values) {
  for (var i = values.length - 1; i >= 0; i--) {
    var newValues = values;
    if (typeof newValues[i] === 'string') {
      newValues.splice(i, 1);
    }
  }
  return newValues;
}
