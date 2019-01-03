import React from 'react';

const SearchButton = (props) => (
  <div>
    <button type="button" className="btn btn-danger" onClick={props.handleButtonClick}>
      SEARCH
    </button>
  </div>
);

export default SearchButton;