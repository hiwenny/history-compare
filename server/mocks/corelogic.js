const nock = require('nock');

// To move base to env
const uat = 'https://api-uat.corelogic.asia/sandbox';
const prod = 'https://api.corelogic.asia';

// Address Match
// [unitNumber] / [streetNumber] [streetName] [streetType] [suburb] [stateCode] [postcode]
nock(uat)
  .get('/search').reply(200, {
    test: 'hello',
  });
