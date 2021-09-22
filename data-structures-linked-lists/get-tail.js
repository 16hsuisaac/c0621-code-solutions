/* exported getTail */

function getTail(list) {
  let listCopy = list;
  while (listCopy.next) {
    listCopy = listCopy.next;
  }
  return listCopy.data;
}
