import React from 'react';
import './App.css';
import Select2 from './components/select2'

function App() {

  let options = [ // user would populate options here, values with null are considered group headers
    { text: 'A', value: null },
    { text: 'Acai', value: 10 },
    { text: 'Apricots', value: 11 },
    { text: 'Avocado', value: 12 },

    { text: 'B', value: null },
    { text: 'Banana', value: 20 },
    { text: 'Blackberry', value: 21 },
    { text: 'Blueberry', value: 22 },

    { text: 'C', value: null },
    { text: 'Cantaloupe', value: 30 },
    { text: 'Clementine', value: 31 },
    { text: 'Currants', value: 32 },

    { text: 'D', value: null },
    { text: 'Dragonfruit', value: 40 },

    { text: 'E', value: null },
    { text: 'Elderberry', value: 50 },
  ]

  return (
    <div className="demo">
      <h1>Karen Go - Software Engineer</h1>
      <h3>Single Select2 Dropdown</h3>
      <Select2 defaultText="Select A Fruit Below!" optionsList={options} />

      <h3>Multi Select2 Dropdown</h3>

    </div>
  );
}

export default App;
