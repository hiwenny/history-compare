const express = require('express');
const path = require('path');
const axios = require('axios');

// Axios global defaults
// Considering this is CL-specific, how does this fare when integrating several APIs with the same header key?
//    Multi-axios instances?
//    For now it is fine.
//    This is also a cheat way to bypass authentication back-and-forth.
axios.defaults.headers.common.authorization = `Bearer ${process.env.AUTH_TOKEN}`;

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// Add in the routes
require('./routes/property')(app);

app.listen(process.env.PORT || 8080);
