const mocks = require('../mocks/corelogic');

function searchMockResponse([req, res]) {
  if (req.query.address === '1 aardvark st') return res.status(200).send(mocks.suggestions);
  return res.status(204).json({ error: 'Not found' });
}

function detailsMockResponse([req, res]) {
  const propertyDetailsMock = mocks.details[req.query.propertyId];
  return res.status(200).send(propertyDetailsMock || {});
}

function useMocks(callback, route) {
  const routesToMocks = {
    '/search': searchMockResponse,
    '/details': detailsMockResponse,
  };

  return routesToMocks[route](callback);
}

module.exports = { useMocks };
