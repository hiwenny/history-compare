/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ErrorBoundary from './Components/ErrorBoundary';
import Table from './Components/Table';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '24px 48px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  section: {
    margin: '12px 0px',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ErrorBoundary>
        <h1>Price History Comparison</h1>
        <TextField
          id="standard-full-width"
          fullWidth
          placeholder="Enter address"
          style={{ margin: 8 }}
          helperText="Example: 1 George Street, Sydney NSW 2000"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <hr />
        <Table />
        <button type="button" onClick={() => { throw new Error('Something'); }}>Try error throwing</button>
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
          onClick={() => axios.get('/search?address=wrong%20street')
            .catch((err) => console.error(err))}
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
      </ErrorBoundary>
    </div>
  );
}

export default App;
