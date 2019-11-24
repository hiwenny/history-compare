# 4. Property Historical Performance Comparison
This is a spike app for comparing historical performance of properties, part of (what I consider a) sensible investing system.

<img src="https://raw.githubusercontent.com/hiwenny/history-compare/43d341629e85b7ff493e6a0c07caf70ab52b4a35/readme/stages_of_investing.svg?sanitize=true">

Step 3.4. of asset (property) research, after:
1. Financing calculations (min. 3 scenarios - best, worst, expected)
2. Cash flow analysis with mortgage (projection monthly and yearly)
3. Asset selection - Suburb search (ABS data etc.)

Initial design is to test out CoreLogic APIs, specifically to compare the history of individual properties in a compact way.

## Table of Contents
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [API and State Diagram](API_and_State_Diagram.md)
- [Design Considerations](Design_Considerations.md)
- [Roadmap](Roadmap.md)

## Quick Start
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
Runs unit tests as per `react-scripts test`

### `yarn build`
Builds for production as per `react-scripts build`

<b>This app was generated using [Create React App](https://github.com/facebook/create-react-app) so all scripts should behave in a standard manner.</b>
