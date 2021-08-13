const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('hello this is a string for res.send');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is listening');
});
