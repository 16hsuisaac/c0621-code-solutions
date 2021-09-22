/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const newList = new LinkedList(value);
  let listCopy = list;
  while (listCopy.next) {
    listCopy = listCopy.next;
  }
  listCopy.next = newList;
}
