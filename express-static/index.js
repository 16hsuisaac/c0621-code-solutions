const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});

const joined = path.join(__dirname, 'public');
console.log('joined', joined);
const expressStatic = app.use(express.static(joined));
console.log('expressStatic', expressStatic);
app.use(express.json());
