import React, { Component } from 'react';
import SearchIcon from '@mui/icons-material/Search';

class searchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    this.props.onSearchTermChange(event.target.value)
  }
  render() {
    return (
      <div className='search-bar'>
        <SearchIcon 
          id="searchIcon"
          fontSize="medium"
          color="white"
        />
         <input 

          placeholder='Search...'
          value={this.state.term} 
          onChange={this.onInputChange} 
        />
      </div>
    );
  }
}

export default searchBar;