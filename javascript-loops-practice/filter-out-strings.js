/* exported filterOutStrings */
function filterOutStrings(values) {
  for (var i = values.length - 1; i >= 0; i--) {
    if (typeof values[i] === 'string') {
      values.splice(i, 1);
    }
  }
  return values;
}
