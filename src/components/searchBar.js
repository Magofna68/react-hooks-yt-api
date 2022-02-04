import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {
  const [ term, setTerm ] = useState("");

    function handleChange (e) {
    console.log({term});
    const lastSearchedTerm = {...term};
    const searchedTerm = e.target.value
    const newTerm = {...searchedTerm}
    
    setTerm(newTerm);
    props.onSearchTermChange(e.target.value);
  }

  return (
      <div className='search-bar'>
        <SearchIcon id="searchIcon" />
         <input 
            placeholder='Search...'
            value={term} 
            onChange={handleChange} 
        />
      </div>
    );
}

export default SearchBar;