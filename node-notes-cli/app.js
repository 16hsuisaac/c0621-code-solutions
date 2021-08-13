const fs = require('fs');
const data = require('./data.json');

if (process.argv[2] === 'read') {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
} else if (process.argv[2] === 'create') {
  const note = process.argv[3];
  data.notes[data.nextId] = note;
  data.nextId++;
  const updatedNote = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', updatedNote, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  }
  );
} else if (process.argv[2] === 'delete') {
  const key = process.argv[3];
  delete data.notes[key];
  const updatedNote = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', updatedNote, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  }
  );
} else if (process.argv[2] === 'update') {
  const key = process.argv[3];
  const newNote = process.argv[4];
  data.notes[key] = newNote;
  const updatedNote = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', updatedNote, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  }
  );
} else {
  console.log('You have entered an invalid command');
}
