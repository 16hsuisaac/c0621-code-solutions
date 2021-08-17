const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/notes', (req, res) => {
  const array = [];
  for (const id in data.notes) {
    array.push(data.notes[id]);
  }
  res.send(array);
});

app.get('/api/notes/:id', (req, res) => {
  const error = {
    400: {
      400: 'id must be a positive integer'
    },
    404: {
      404: 'cannot find note with that id'
    }
  };
  if (req.params.id < 0) {
    res.status(400).json(error[400]);
  } else if (data.notes[req.params.id]) {
    res.json(data.notes[req.params.id]);
  } else {
    res.status(404).json(error[404]);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const error = {
    400: {
      400: 'content is a required field'
    },
    404: {
      404: 'cannot find note with that id'
    },
    500: {
      500: 'an unexpected error occurred'
    }
  };
  if (!req.body.content) {
    res.status(400).json(error[400]);
  } else if (req.body.content) {
    const id = data.nextId;
    const newData = {};
    newData.id = id;
    newData.content = req.body.content;
    data.notes[data.nextId] = newData;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json(error[500]);
      } else {
        res.status(201).json(data.notes[data.nextId]);
        data.nextId++;
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const error = {
    400: {
      400: 'id must be a positive integer'
    },
    404: {
      404: 'cannot find note with that id'
    },
    500: {
      500: 'an unexpected error occurred'
    }
  };
  if (req.params.id < 0) {
    res.status(400).json(error[400]);
  } else {
    if (data.notes[req.params.id]) {
      delete data.notes[req.params.id];
      fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
        if (err) {
          res.status(500).json(error[500]);
        } else {
          res.sendStatus(204);
        }
      });
    } else if (!data.notes[req.params.id]) {
      res.status(404).json(error[404]);
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const error = {
    '400id': {
      400: 'id must be a positive integer'
    },
    '400content': {
      400: 'content is a required field'
    },
    404: {
      404: 'cannot find note with that id'
    },
    500: {
      500: 'an unexpected error has occurred'
    }
  };
  if (req.params.id < 0) {
    res.status(400).json(error['400id']);
  } else if (!req.body.content) {
    res.status(400).json(error['400content']);
  } else if (!data.notes[req.params.id]) {
    res.status(404).json(error[404]);
  } else {
    const oldId = data.notes[req.params.id].id;
    data.notes[req.params.id] = req.body.content;
    data.notes[req.params.id].id = oldId;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json(error[500]);
      } else {
        res.status(200).json(data.notes[req.params.id]);
      }
    });
  }
});
