import React,{ Component, Fragment } from 'react';
import { SearchButton } from './Buttons';
import { SearchInput } from './Inputs';

class Main extends Component {

  state = {
    showAutofill: false,
    showPopup: false,
    showInput: false,
    listIndex: '',
    listValue: [{ id:1, value:'Partial Match' },
                { id:2, value:'Autofill Match' },
                { id:3, value:'Other Match' }]
  }

  handleListHoverIn = (e) => {
    this.setState({ 
      showPopup: true,
      listIndex: e.target.id,
     })
  }

  handleProceed = (e) => {

  }

  render(){
    const { showAutofill, showPopup, showInput, listValue, listIndex } = this.state;
    return(
      <Fragment>
        <SearchButton handleButtonClick={(e) => this.setState({ showInput: !showInput })}/>
        
        { showInput && 
            <SearchInput
              listValue={listValue}
              listIndex={listIndex} 
              showAutofill={showAutofill}
              showPopup={showPopup}
              handleInputChange={(e) => this.setState({ showAutofill: true })} 
              handleListHoverIn={this.handleListHoverIn}
              onCancel={(e) => this.setState({ showPopup: false })}
              onProceed={this.handleProceed}
            /> }
      </Fragment>
    );
  }
}

export default Main;