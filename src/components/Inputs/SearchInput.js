import React,{ Fragment } from 'react';
import { AutofillPopup } from '../Popups';

const SearchInput = (props) => (
  <div className="position-relative">
    <div className="mb-3 search-input col-md-3 offset-2">
      <input 
        type="text" 
        className="form-control" 
        placeholder='Type to Start Searching'
        onChange={props.handleInputChange} 
      />
    </div>
    { props.showAutofill && 
        <ul className="col-md-3 offset-2 search-list">
          { props.listValue.map(({ id, value}) => 
              <Fragment key={id}> 
                <li id={id} className="list-group-item" onMouseOver={props.handleListHoverIn}>{value}</li>
                { ( parseInt(props.listIndex) === id && props.showPopup ) && 
                  <AutofillPopup
                    listIndex={props.listIndex}
                    heading={value.toUpperCase()}
                    onCancel={props.onCancel}
                    onProceed={props.onProceed} 
                  /> }
              </Fragment>
            )
          }
        </ul> 
    }
  </div>
);

export default SearchInput;