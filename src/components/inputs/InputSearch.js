import React from 'react';

const InputSearch = (props) => (
  <div>
    <div className="input-group input-group-sm mb-3">
      <input 
        type="text" 
        className="form-control" 
        placeholder='Type to Start Searching'
        onChange={props.handleInputChange} 
      />
    </div>
    { props.showAutofill && 
        <ul className="list-group">
          <li className="list-group-item" onMouseOver={props.handleListHoverIn}>Partial Match</li>
          <li className="list-group-item" onMouseOver={props.handleListHoverIn}>Autofill Match</li>
          <li className="list-group-item" onMouseOver={props.handleListHoverIn}>Other Match</li>
        </ul> }
  </div>
);

export default InputSearch;