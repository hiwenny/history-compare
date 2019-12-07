/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './App.css';

function App() {
  // remember to put in propertyId as key to prevent rerendering**
  const sampleData = [
    {
      brand: 'VW',
      year: 2012,
      color: 'Orange',
      vin: 'dsad231ff',
    },
    {
      brand: 'Audi',
      year: 2011,
      color: 'Black',
      vin: 'gwregre345',
    },
    {
      brand: 'Renault',
      year: 2005,
      color: 'Gray',
      vin: 'h354htr',
    },
    {
      brand: 'BMW',
      year: 2003,
      color: 'Blue',
      vin: 'j6w54qgh',
    },
    {
      brand: 'Mercedes',
      year: 1995,
      color: 'Orange',
      vin: 'hrtwy34',
    },
    {
      brand: 'Volvo',
      year: 2005,
      color: 'Black',
      vin: 'jejtyj',
    },
    {
      brand: 'Honda',
      year: 2012,
      color: 'Yellow',
      vin: 'g43gr',
    },
    {
      brand: 'Jaguar',
      year: 2013,
      color: 'Orange',
      vin: 'greg34',
    },
    {
      brand: 'Ford',
      year: 2000,
      color: 'Black',
      vin: 'h54hw5',
    },
    {
      brand: 'Fiat',
      year: 2013,
      color: 'Red',
      vin: '245t2s',
    },
  ];
  const sampleShowColumns = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {/* sample */}
        <DataTable value={sampleData}>
          {sampleShowColumns.map((col) => (
            <Column key={col.field} field={col.field} header={col.field} />
          ))}
        </DataTable>
        <button
          onClick={() => axios
            .get('/search?address=1%20aardvark%20st')
            .then((res) => console.log('@@ response', res))}
        >
          Test
        </button>
        <button onClick={() => axios.get('/search?address=wrong%20street')}>
          Test fail
        </button>
      </header>
    </div>
  );
}

export default App;
