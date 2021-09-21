/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    const number = stack.pop();
    if (number > max) {
      max = number;
    }
  }
  return max;
}
