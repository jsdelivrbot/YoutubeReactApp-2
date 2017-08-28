import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const api_key="AIzaSyAysJX34sjXG_2X8gt3pg7Sgc-Y2twzM1g";
//  this component produces some HTML
const  App = () => {
  return (<div>
 <SearchBar />
  </div>);
}

// take the generated HTML and put it into DOM
 ReactDOM.render(<App />,document.querySelector('.container'));
