import React from 'react';

const InputSearch = (props) => (
  <div>
    <div className="input-group input-group-sm mb-3">
      <input type="text" className="form-control" placeholder='Type to Start Searching' />
    </div>
    <ul className="list-group">
      <li className="list-group-item">Partial Match</li>
      <li className="list-group-item">Autofill Match</li>
      <li className="list-group-item">Other Match</li>
    </ul>
  </div>
);

export default InputSearch;