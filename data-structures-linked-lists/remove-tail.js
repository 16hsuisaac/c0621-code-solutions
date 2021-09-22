/* exported removeTail */

function removeTail(list) {
  if (!list.next) {
    return;
  }
  let listCopy = list;
  let previous;
  while (listCopy.next) {
    previous = listCopy;
    listCopy = listCopy.next;
  }
  previous.next = null;
}
