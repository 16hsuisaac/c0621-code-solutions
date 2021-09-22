/* exported getLength */

function getLength(list) {
  let count = 1;
  let listCopy = list;
  while (listCopy.next) {
    count++;
    listCopy = listCopy.next;
  }
  return count;
}
