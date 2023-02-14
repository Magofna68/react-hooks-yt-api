import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDeferredValue } from 'react';

const SearchBar = (props) => {
  const [ term, setTerm ] = useState("");
  const searchInput = React.useRef(null);

  // useEffect(()=> {
  //   searchInput.current.focus();
  // }, [term]);

  // useEffect(()=> {
  //   const timer = setTimeout(() => 
  //     searchInput.current.focus(), 3000);
  //     return () => clearTimeout(timer);
  // }, [term]);
      
    const handleChange = (e) => {
      // const deferredInput = useDeferredValue(e.target.value)
      // props.onSearchTermChange(deferredInput);
      // const searchedTerm = deferredInput;
      props.onSearchTermChange(e.target.value);
      const searchedTerm = e.target.value
      const newTerm = {...searchedTerm}
      setTerm(newTerm);
      console.log({term});  
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