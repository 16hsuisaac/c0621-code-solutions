import React from 'react';
import ReactDOM from 'react-dom';

import Accordian from './accordion';

const languages = [
  {
    id: 1,
    language: 'Hypertext Markup Language',
    context: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.'
  },
  {
    id: 2,
    language: 'Cascading Style Sheets',
    context: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written...'
  },
  {
    id: 3,
    language: 'JavaScript',
    context: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language'
  }
];

ReactDOM.render(
  <Accordian data={languages} />,
  document.querySelector('#root')
);
