const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

let nextId = 3;
let grades = {};

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const x in grades) {
    array.push(grades[x]);
  }
  res.send(array);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  res.status(201).send(grades[nextId]);
  nextId++;
});

grades = {
  1: {
    course: 'Meming',
    id: 1,
    name: 'beeg yoshi',
    score: 9001
  },
  2: {
    course: 'smash bros',
    id: 2,
    name: 'waluigi',
    score: 70
  }
};
