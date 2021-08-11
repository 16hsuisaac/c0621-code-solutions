const fs = require('fs');
const array = [];

for (let i = 2; i < process.argv.length; i++) {
  array.push('');
  try {
    const filename = process.argv[i];
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) throw err;
      array.splice(i, 1, data);
      console.log(array[i]);
    });
  } catch (err) {}
}
