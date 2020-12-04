import React from 'react';
import './Search.css'

function Search(props) {

  return (
    <div>
      <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
        <input
          className="search-input"
          value={props.value}
          onChange={(e) => props.onChange(e)}
          name="Search"
          placeholder="Search for a destination"
          type="text"
          autoFocus
        />
      </form>
    </div>
  );
}

export default Search;