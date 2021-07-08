/* exported omit */
function omit(source, keys) {
  var keysObject = Object.assign({}, source);
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      delete keysObject[(keys[i])];
    }
  }
  return keysObject;
}

/* 1) duplicate the given object
2) loop through each of the keys
3) if the duplicated object contains the key, delete it
4) return the object */
