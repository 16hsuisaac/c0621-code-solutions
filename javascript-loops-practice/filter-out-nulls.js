/* exported filterOutNulls */
function filterOutNulls(values) {
  for (var i = values.length - 1; i >= 0; i--) {
    var newValues = values;
    if (newValues[i] === null) {
      newValues.splice(i, 1);
    }
  }
  return newValues;
}
