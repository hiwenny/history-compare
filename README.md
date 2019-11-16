# 4. Property Historical Performance Comparison
This is a spike app for a comparison app.

Initial design is to test out CoreLogic APIs, specifically to compare the history of individual properties in a compact way.

Step 4 of property research, after:
1. Financing calculations (min. 3 scenarios - best, worst, expected)
2. Cash flow analysis with mortgage (projection monthly and yearly)
3. Asset selection - Suburb search (ABS data etc.)

## Table of Contents
- [Design Considerations](#design-considerations)

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Server is at [http://localhost:8080](http://localhost:8080).

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Roadmap

### Base functionality:
- Search exact property
- Fetch price history data
- Display property data in table
- Export to pdf/csv

** remember to put in propertyId as key to prevent rerendering**

### Enhancement redux state data:
- Add/remove data
- De-duplicate data
- Alphabetical/ascending rows ordering
- Show/hide columns toggling
- Other rows ordering
- Multiple rows ordering (as excel does)
- Caching API calls

### Enhancement animation:
- Loader while fetching data
- Animation for signalling already-existing property (flash alert border and highlight)
- react-virtualized (https://bvaughn.github.io/react-virtualized/#/components/Table) for long lists lightweight rendering

### More features:
- Google Map integration
- JWT validation using created credential

Generated using [Create React App](https://github.com/facebook/create-react-app).

## Design Considerations

### Modern React
I'd like to minimise React-related libraries used. That means doing away with redux, for starters. 

This way requires special care to design components hierarchy according to the propagation of components affected by a state change.

Some considerations on the tradeoffs:
- No Redux:
  - substitute with HOC for enhancements
  - Tradeoff is the ability to persist - outside of setting localStorage manually. In that case just use Redux...
  - On the flip side, since the app is designed to be a blank state every time, this could work. The use of states means I don't have to deal with clearing and resets.
  - Other maybe-tradeoff is having to put a speed bump on exit to make sure the user doesn't navigate away accidentally and lose data.

- Functional pattern all over:
  - Minimize the use of class
  - Hooks for state

### Data source
CoreLogic was the first choice, but ultimately it comes down to whether the cost to integrate is acceptable vs the benefit it provides.

If not, it should be easily repurposed for a different source of data, or provide data entry capability.

<img src="./readme/flow_of_information.svg">