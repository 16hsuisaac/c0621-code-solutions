/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const first = stack.pop();
  if (first === undefined) {
    return undefined;
  }
  const second = stack.peek();
  if (second === undefined) {
    stack.push(first);
    return second;
  }
  stack.push(first);
  return second;
}
