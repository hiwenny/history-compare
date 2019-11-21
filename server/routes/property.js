const axios = require('axios');

const paths = {
  search: '/search',
};

// Proxy API integration to be in server to better handle auth
// UI for business logic ONLY
const uat = 'https://api-uat.corelogic.asia/sandbox';
// const prod = 'https://api.corelogic.asia';

const mocks = require('../mocks/corelogic');

// Address Match
// [unitNumber] / [streetNumber] [streetName] [streetType] [suburb] [stateCode] [postcode]
function propertyAPI(app) {
  // Can this intercept and stub the response instead?
  // This needs header authenticated Bearer token
  app.get(paths.search, (req, res) => {
    if (process.env.NODE_ENV === 'development') return res.status(200).send(mocks.suggestions);
    axios
      .get(`${uat}/sandbox/property/au/v2/suggest.json?q=1%20aardvark%20st`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

// pull from mocks or do actual request
module.exports = propertyAPI;
