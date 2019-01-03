import React,{ Component, Fragment } from 'react';
import SearchButton from './buttons/SearchButton';
import InputSearch from './inputs/InputSearch';
import AutofillPopup from './popups/AutofillPopup';

class Main extends Component {

  state = {
    showAutofill: false,
    showPopup: false,
    showInput: false,
  }

  handleProceed = (e) => {

  }

  render(){
    const { showAutofill, showPopup, showInput } = this.state;
    return(
      <Fragment>
        <SearchButton handleButtonClick={(e) => this.setState({ showInput: !showInput })}/>
        
        { showInput && 
            <InputSearch 
              showAutofill={showAutofill}
              handleInputChange={(e) => this.setState({ showAutofill: true })} 
              handleListHoverIn={(e) => this.setState({ showPopup: true })}
            /> }
        
        { showPopup && 
            <AutofillPopup
              onCancel={(e) => this.setState({ showPopup: false })}
              onProceed={this.handleProceed} 
            /> }
      </Fragment>
    );
  }
}

export default Main;