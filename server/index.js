const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

// Add in the routes
require('./routes/property')(app);


app.listen(process.env.PORT || 8080);
