// this comment is just here so I have something to commit

const fs = require('fs');
const copiedFileName = process.argv[2];
const pasteFile = process.argv[3];

fs.readFile(copiedFileName, 'utf8', (err, data) => {
  if (err) throw err;
  const copiedFileContent = data;
  fs.writeFile(pasteFile, copiedFileContent, err => {
    if (err) throw err;
  });
});
