import React from 'react';

const AutofillPopup = (props) => (
  <div className={`set-hover-${props.listIndex} offset-11 p-0 main-set-hover`}>
    <div className="hover-header">
      <h6>{props.heading}</h6>
    </div>
    <div className="center-hover text-center pt-5 pb-5">
      <h6>Hello!</h6>
    </div>
    <div className="row footer-border">
      <div className="col-md-6 border-right">
        <h6 onClick={props.onCancel}>Cancel</h6>
      </div>
      <div className="col-md-6 text-right">
        <h6 onClick={props.onProceed}>Proceed</h6>
      </div>
    </div>
  </div>
);

export default AutofillPopup; 