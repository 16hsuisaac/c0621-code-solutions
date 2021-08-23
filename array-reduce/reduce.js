function reduce(array, reducer, initialValue) {
  if (initialValue || initialValue === 0) {
    array.splice(0, 0, initialValue);
  }
  let value = array[0];
  for (let i = 1; i < array.length; i++) {
    value = reducer(value, array[i]);
  }
  return value;
}

/* let i = 0
let result = initial value
if (arguments.length < 3) {
  i = 1
  result = inputArray[0]
}
for (; i<inputArraylength; i++) {
  result = reducer(result, array[i])
}
return result;
} */
