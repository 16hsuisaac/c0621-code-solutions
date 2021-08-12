const fs = require('fs');
const note = process.argv[2].toString();

fs.writeFile('note.txt', note, err => {
  if (err) throw err;
});
