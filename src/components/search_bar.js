import React,{ Component } from 'react';

// class component as opposed to functional component
// can save state etc
// you have to use one based on the context
class SearchBar extends Component {

  render() {
    return <input onChange={this.onInputChange}/>;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
