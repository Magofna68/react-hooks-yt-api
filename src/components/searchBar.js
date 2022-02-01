import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {
  const [ term, setTerm ] = useState('');

  this.onInputChange = (e) => {
    console.log({term});
    const oldTerm = {...term};
    const newTerm = e.target.value
    setTerm(newTerm);
    props.onSearchTermChange(e.target.value);
  }

  return (
      <div className='search-bar'>
         <input 
            placeholder='Search...'
            value={term} 
            onChange={this.onInputChange} 
        />
      </div>
    );
}

export default SearchBar;