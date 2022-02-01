import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {

  const [ term, setTerm ] = useState('');

  onInputChange = (event) => {
    console.log({term})
    setTerm(event.target.value);
    console.log({term})
    props.onSearchTermChange(event.target.value);
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