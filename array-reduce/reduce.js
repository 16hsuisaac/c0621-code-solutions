function reduce(array, reducer, initialValue) {
  if (initialValue) {
    array.splice(0, 0, initialValue);
  }
  let value = array[0];
  for (let i = 1; i < array.length; i++) {
    value = reducer(value, array[i]);
  }
  return value;
}
