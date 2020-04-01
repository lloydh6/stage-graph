import React, { useState } from 'react';
import StageGraph from './graph/stageGraph';

import './app.css';
import NewValue from './inputs/newValue';

function App() {

  const [points, updatePoints] = useState([100, 70, 60, 40, 15]);
  const [columnNames, updateColumnNames] = useState(['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5']);

  const [newValue, updateNewValue] = useState();
  const [newLabel, updateNewLabel] = useState('');

  function handleAdd(value, label) {
    if (value != null && label !== '') {
      points.push(value);
      updatePoints([...points]);
      columnNames.push(label);
      updateColumnNames([...columnNames]);
    }
  }

  return (
   <div className="pageWrapper">
    <StageGraph
      points={[...points]}
      columnNames={[...columnNames]}
    />
    <NewValue
      newValue={newValue}
      updateNewValue={updateNewValue}
      newLabel={newLabel}
      updateNewLabel={updateNewLabel}
      handleAdd={handleAdd}
    />
   </div>
  );
}

export default App;
