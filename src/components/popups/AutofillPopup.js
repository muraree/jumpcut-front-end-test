import React from 'react';

const AutofillPopup = (props) => (
  <div>
    <div>
      AUTOFILL MATCH
    </div>
    <div>
      Hello!
    </div>
    <div>
      <span onClick={props.onCancel}>Cancel</span>
      <span onClick={props.onProceed}>Proceed</span>
    </div>
  </div>
);

export default AutofillPopup; 