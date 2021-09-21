/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const first = stack.pop();
  if (first !== undefined) {
    stack.push(value);
    stack.push(first);
  }
}
