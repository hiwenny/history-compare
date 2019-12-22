/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ErrorBoundary from './Components/ErrorBoundary';
import Table from './Components/Table';


// --- sample data

const sample = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(id, dessert, calories, fat, carbs, protein) {
  return {
    id, dessert, calories, fat, carbs, protein,
  };
}

const rows = [];

// for (let i = 0; i < 1; i += 1) {
//   const randomSelection = sample[Math.floor(Math.random() * sample.length)];
//   rows.push(createData(i, ...randomSelection));
// }

const columns = [
  {
    width: 200,
    label: 'Dessert',
    dataKey: 'dessert',
  },
  {
    width: 120,
    label: 'Calories\u00A0(g)',
    dataKey: 'calories',
    numeric: true,
  },
  {
    width: 120,
    label: 'Fat\u00A0(g)',
    dataKey: 'fat',
    numeric: true,
  },
  {
    width: 120,
    label: 'Carbs\u00A0(g)',
    dataKey: 'carbs',
    numeric: true,
  },
  {
    width: 120,
    label: 'Protein\u00A0(g)',
    dataKey: 'protein',
    numeric: true,
  },
];

// ---- end of sample data

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
        <Table rows={rows} columns={columns} />
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
