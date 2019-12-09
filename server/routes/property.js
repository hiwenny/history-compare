const axios = require('axios');
const { useMocks } = require('../mocks/helper');

const paths = {
  search: '/search',
  details: '/details',
};

// Proxy API integration to be in server to better handle auth
// UI for business logic ONLY
const URLS = {
  UAT: 'https://api-uat.corelogic.asia/sandbox',
  PROD: 'https://api.corelogic.asia',
};

// function authenticate(app) {
//   // Authentication
//   // Always uses prod because they use OAuth
//   axios.get('https://api.corelogic.asia/access/oauth/token?client_id=52AnHYQOxFalBi7wyFdWGpdghERPiFWD&client_secret=4bc1eFC2s9PohPXD&grant_type=client_credentials', (req, res) => {
//     console.log('@@ req', req);
//     console.log('@@ res', res);
//     res.send('hello');
//   });
// }

function errorHandler(error, res) {
  if (error.response) {
    console.log('Error response', error.response);
    return res.status(error.response.status).send(error.response.data);
  } if (error.request) {
    console.log('Error request', error.request);
    return res.status(504);
  }
  return res.status(500);
}

// Address Match
// [unitNumber] / [streetNumber] [streetName] [streetType] [suburb] [stateCode] [postcode]
function propertyAPI(app) {
  const NODE_ENV = process.env.NODE_ENV.toUpperCase();

  /* Endpoint for Search */
  app.get(paths.search, (req, res) => {
    // Use mocks in development
    // Next level: Can this intercept and stub the response instead?
    if (NODE_ENV === 'DEVELOPMENT') return useMocks([req, res], paths.search);

    return axios
      .get(`${URLS[NODE_ENV]}/property/au/v2/suggest.json?q=${req.query.address}`)
      .then((response) => res.status(response.status).send(response.data))
      .catch((error) => errorHandler(error, res));
  });

  /* Endpoint for getting Details using propertyId */
  app.get(paths.details, (req, res) => {
    if (NODE_ENV === 'DEVELOPMENT') return useMocks([req, res], paths.details);
    return axios
      .get(`${URLS[NODE_ENV]}/property-details/au/properties/${req.query.propertyId}/attributes/core`)
      .then((response) => res.status(response.status).send(response.data))
      .catch((error) => errorHandler(error, res));
  });
}

// pull from mocks or do actual request
module.exports = propertyAPI;
