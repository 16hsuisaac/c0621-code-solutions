/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }
  const second = queue.dequeue();
  const larger = first > second ? first : second;
  const smaller = first > second ? second : first;
  queue.enqueue(larger);
  return smaller;
}
