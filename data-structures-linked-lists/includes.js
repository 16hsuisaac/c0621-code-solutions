/* exported includes */

function includes(list, value) {
  let listCopy = list;
  while (listCopy) {
    if (listCopy.data === value) {
      return true;
    }
    listCopy = listCopy.next;
  }
  return false;
}
