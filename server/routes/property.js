const axios = require('axios');
const { useMocks } = require('../mocks/helper');

const paths = {
  search: '/search',
};

// Proxy API integration to be in server to better handle auth
// UI for business logic ONLY
const URLS = {
  UAT: 'https://api-uat.corelogic.asia/sandbox',
  PROD: 'https://api.corelogic.asia',
};

// Address Match
// [unitNumber] / [streetNumber] [streetName] [streetType] [suburb] [stateCode] [postcode]
function propertyAPI(app) {
  app.get(paths.search, (req, res) => {
    const NODE_ENV = process.env.NODE_ENV.toUpperCase();
    // Use mocks in development
    // Next level: Can this intercept and stub the response instead?
    if (NODE_ENV === 'development') return useMocks([req, res], paths.search);
    return axios
      .get(`${URLS[NODE_ENV]}/property/au/v2/suggest.json?q=${req.query.address}`)
      .then((response) => res.status(response.status).send(response.data))
      .catch((error) => {
        if (error.response) {
          console.log('Error response', error.response);
          return res.status(error.response.status).send(error.response.data);
        } if (error.request) {
          console.log('Error request', error.request);
          return res.status(504);
        }
        return res.status(500);
      });
  });
}

// pull from mocks or do actual request
module.exports = propertyAPI;
