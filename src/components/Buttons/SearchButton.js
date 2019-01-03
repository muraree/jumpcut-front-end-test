import React from 'react';

const SearchButton = (props) => (
  <div className="row">
    <div className="col-md-12 text-center">
    <div className="main-btn">
    <button type="button" className="btn btn-danger search-btn" onClick={props.handleButtonClick}>
      <i className="fa fa-search" aria-hidden="true"></i>
      SEARCH
    </button>
    </div>
    </div>
  </div>
);

export default SearchButton;