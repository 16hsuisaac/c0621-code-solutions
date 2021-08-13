const fs = require('fs');
const copiedFileName = process.argv[2];
const pasteFile = process.argv[3];
let copiedFileContent = '';

fs.readFile(copiedFileName, 'utf8', (err, data) => {
  if (err) throw err;
  copiedFileContent = data;
  fs.writeFile(pasteFile, copiedFileContent, err => {
    if (err) throw err;
  });
});
