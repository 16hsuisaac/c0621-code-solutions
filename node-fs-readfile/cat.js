const fs = require('fs');
const array = [];
let a = 2;

for (let i = 2; i < process.argv.length; i++) {
  array.push('');
}

for (let i = 2; i < process.argv.length; i++) {
  const filename = process.argv[i];
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    array.splice(i - 2, 1, data);
    while (true) {
      if (array[i - 2] !== '') {
        break;
      }
    }
    pleaseWork(array);
  });
}

const pleaseWork = array => {
  if (a === process.argv.length - 1) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  a++;
};
