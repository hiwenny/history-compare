/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ErrorBoundary from './Components/ErrorBoundary';
import Table from './Components/Table';
import SearchBar from './Components/SearchBar';
import DevTools from './DevTools';

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
    id,
    dessert,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [];

for (let i = 0; i < 2; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}

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
        <SearchBar />
        <hr />
        <Table rows={rows} columns={columns} />
        <DevTools />
      </ErrorBoundary>
    </div>
  );
}

export default App;
