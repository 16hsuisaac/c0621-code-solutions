import React from 'react';
import reactDOM from 'react-dom';

const h1 = React.createElement(
  'h1',
  null,
  ['Hello, React!']
);

reactDOM.render(h1, document.getElementById('root'));
