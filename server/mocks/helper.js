const mocks = require('../mocks/corelogic');

function searchMockResponse([req, res]) {
  if (req.query.address === '1 aardvark st') return res.status(200).send(mocks.suggestions);
  return res.status(204).json({ error: 'Not found' });
}

function useMocks(callback, route) {
  const routesToMocks = {
    '/search': searchMockResponse(callback),
  };

  return routesToMocks[route];
}

module.exports = { useMocks };
