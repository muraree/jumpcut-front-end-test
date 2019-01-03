import React,{ Component, Fragment } from 'react';
import SearchButton from './buttons/SearchButton';
import InputSearch from './inputs/InputSearch';
import AutofillPopup from './popups/AutofillPopup';

class Main extends Component {

  state = {
    showAutofill: false,
    showPopup: false,
  }

  render(){
    return(
      <Fragment>
        <SearchButton />
        <InputSearch />
        <AutofillPopup />
      </Fragment>
    );
  }
}

export default Main;