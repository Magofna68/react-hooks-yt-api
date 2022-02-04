import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {
  const [ term, setTerm ] = useState("");

    // function handleChange (e) {
    //   const lastSearchedTerm = {...term};
      
    const handleChange = (e) => {
      props.onSearchTermChange(e.target.value);
      const searchedTerm = e.target.value
      const newTerm = {...searchedTerm}
      setTerm(...searchedTerm);
      console.log({term});
  
  
    setTerm(newTerm);
  }

  return (
      <div className='search-bar'>
        <SearchIcon id="searchIcon" />
         <input 
            type="text"
            placeholder='Search...'
            label="Search..."
            value={term} 
            onChange={handleChange} 
        />
      </div>
    );
}

export default SearchBar;