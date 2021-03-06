import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';


const SearchForm = () => {

  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  /** returns results with same search terms as user types */
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }

  useEffect(() => {
    searchValue.current.focus();
  }, [searchCocktail])

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <section className="section">
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
         
        </label>
        
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail} placeholder="Search for a drink..." />
      </form>
    </section>
  )
}

export default SearchForm;
