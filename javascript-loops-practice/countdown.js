/* exported countdown */
function countdown(number) {
  var output = [];
  while (number >= 0) {
    output.push(number);
    number = number - 1;
  }
  return output;
}
