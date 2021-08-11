const fs = require('fs');

for (let i = 2; i < process.argv.length; i++) {
  const filename = process.argv[i];
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
