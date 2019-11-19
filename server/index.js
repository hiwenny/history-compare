const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

// if NODE_ENV===development use mocks
if (process.env.NODE_ENV !== 'production') require('./mocks/corelogic')(app);
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(process.env.PORT || 8080);
