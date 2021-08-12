const fs = require('fs');
const array = [];

for (let i = 2; i < process.argv.length; i++) {
  array.push('');
}

for (let i = 2; i < process.argv.length; i++) {
  const filename = process.argv[i];
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    array.splice(i - 2, 1, data);
    console.log(array[i - 2]);
  });
}
