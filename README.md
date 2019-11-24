# 4. Property Historical Performance Comparison
This is a spike app for comparing historical performance of properties, part of (what I consider a) sensible investing system.

<img src="https://raw.githubusercontent.com/hiwenny/history-compare/43d341629e85b7ff493e6a0c07caf70ab52b4a35/readme/stages_of_investing.svg?sanitize=true">

Step 3.4. of asset (property) research, after:
1. Financing calculations (min. 3 scenarios - best, worst, expected)
2. Cash flow analysis with mortgage (projection monthly and yearly)
3. Asset selection - Suburb search (ABS data etc.)

Initial design is to test out CoreLogic APIs, specifically to compare the history of individual properties in a compact way.

## Table of Contents
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Roadmap](#roadmap)
- [Design Considerations](#design-considerations)

## Usage
Public access has been de-scoped by changing its use case to private use only. Private use here means cloning this repo and running the app locally.

**You need to pass in `$AUTH_TOKEN` when running UAT to use the actual CoreLogic APIs**

DEV uses local mocked response so it doesn't need authentication.

To open it up properly there's a lot of work setting up proper authentication and API key management. This is not worth the effort should we go down the path of `data entry` instead of `third party integration`, so I'm keeping it light for POC.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Server is at [http://localhost:8080](http://localhost:8080).

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `AUTH_TOKEN=${YOUR_AUTH_TOKEN} yarn uat`
Runs app in UAT mode, where it's fully integrated with test APIs.

To run this you need to pass in your Authorization token, which is a shortcut to bypass the whole OAuth proper authentication. You can get the token through CoreLogic's Developer Swagger portal in any of their API demo.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<b>This app was generated using [Create React App](https://github.com/facebook/create-react-app) so all scripts should behave in a standard manner.</b>

## Roadmap
[Project board in here.](https://trello.com/b/TR2LH5j6/history-compare)

### Base functionality:
- Search exact property
- Fetch price history data
- Display property data in table
- Export to pdf/csv

### Enhancement state data:
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
- Optional post-demand test: Allow users to use app - authentication in server (explore AuthO)?

### DevTools
- PACT/Swagger for API Contract and test?

## Design Considerations

### Modern React
I'd like to minimise React-related libraries used. That means doing away with redux, for starters.

This way requires special care to design components hierarchy according to the propagation of components affected by a state change.

Some considerations on the decisions:
- No Redux:
  - substitute with HOC for enhancements
  - Tradeoff is the ability to persist - outside of setting localStorage manually. In that case just use Redux...
  - On the flip side, since the app is designed to be a blank state every time, this could work. The use of states means I don't have to deal with clearing and resets.
  - Other maybe-tradeoff is having to put a speed bump on exit to make sure the user doesn't navigate away accidentally and lose data. More annoying, but alas.

- Functional pattern all over:
  - Minimize the use of class
  - Hooks for state

### Data source
CoreLogic was the first choice, but ultimately it comes down to whether the cost to integrate is acceptable vs the benefit it provides.

If not, it should be easily repurposed for a different source of data, or provide data entry capability.

<img src="https://raw.githubusercontent.com/hiwenny/history-compare/9261c81718df412b7dcbd6a344cd0fc0fee5e06d/readme/flow_of_Information.svg?sanitize=true">
