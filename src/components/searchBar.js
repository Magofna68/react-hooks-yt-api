import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {
  const [ term, setTerm ] = useState("");
  const searchInput = React.useRef(null);
  useEffect(()=> {
    searchInput.current.focus();
  }, [term]);

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
            ref={searchInput}
            type="text"
            placeholder='Search...'
            label="Search..."
            defaultValue={term} 
            onChange={handleChange} 
        />
      </div>
    );
}

export default SearchBar;