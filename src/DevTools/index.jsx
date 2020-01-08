import React, { Fragment } from 'react';
import axios from 'axios';

/** Instead of logging/rendering state, pass them on to here and test.
 * Oh this could be a good use case for HOC!
 *
 * Just enhance the component when developing, remove when done.
 */
const DevTools = (state) => (
  // render state here recursively, key-value pairs
  <>
    <button
      type="button"
      onClick={() => {
        throw new Error('Something');
      }}
    >
    Try error throwing
    </button>
    <button
      type="button"
      onClick={() => axios
        .get('/search?address=1%20aardvark%20st')
        .then((res) => console.log('@@ response', res))
        .catch((err) => console.error(err))}
    >
      Test search
    </button>
    <button
      type="button"
      onClick={() => axios.get('/search?address=wrong%20street').catch((err) => console.error(err))}
    >
      Test search fail
    </button>
    <button
      type="button"
      onClick={() => axios
        .get('/details?propertyId=1')
        .then((res) => console.log('@@ property details', res))
        .catch((err) => console.error(err))}
    >
      Test details
    </button>
  </>
);

export default DevTools;
