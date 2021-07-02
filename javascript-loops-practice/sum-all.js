/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  var length = numbers.length - 1;
  while (length >= 0) {
    sum += numbers[length];
    length = length - 1;
  }
  return sum;
}
