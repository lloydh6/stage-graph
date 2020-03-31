import React, { useState } from 'react';
import StageGraph from './graph/stageGraph';

import './app.css';

function App() {

  const [points, updatePoints] = useState([100, 70, 60, 40, 15]);

  function handleAdd(value) {
    points.push(value);
    updatePoints([...points]);
  }

  return (
   <div className="pageWrapper">
    <StageGraph
      points={[...points]}
      columnNames={['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5']}
    />
    <button onClick={() => handleAdd(10)}>
      Add
    </button>
   </div>
  );
}

export default App;
