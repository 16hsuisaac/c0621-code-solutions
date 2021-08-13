/* const fs = require('fs');
let counter = 0;

const readFile = () => {
  if (counter < process.argv.length - 2) {
    const filename = process.argv[counter + 2];
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(data);
      counter++;
      readFile();
    });
  }
};

readFile(); */

const fs = require('fs');
let counter = 0;
const files = process.argv.slice(2);

for (let i = 0; i < files.length; i++) {
  fs.readFile(files[i], 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    files[i] = data;
    counter++;
    if (counter === files.length) {
      for (let a = 0; a < files.length; a++) {
        console.log(files[a]);
      }
    }
  });
}
