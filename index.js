#!/usr/local/bin/node

const express = require('express');
const { v4: uuidv4 } = require('uuid');

console.log('Hello World: ' + uuidv4());
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World from Yuying');
});

app.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});

module.exports = app;
