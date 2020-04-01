import React from 'react';

import './newValue.css';

function NewValue({ newValue, updateNewValue, newLabel, updateNewLabel, handleAdd }) {
  return (
    <div className="newValueWrapper">
      <div className="inputWrapper">
        <label className="inputLabel">New Value</label>
        <input type="number" value={newValue} onChange={e => updateNewValue(e.target.value)} />
      </div>
      <div className="inputWrapper">
      <label className="inputLabel">New Label</label>
        <input value={newLabel} onChange={e => updateNewLabel(e.target.value)} />
      </div>
      <div className="inputWrapper">
        <button onClick={() => handleAdd(newValue, newLabel)}>
          Add
        </button>
      </div>
    </div>
  )
}

export default NewValue
