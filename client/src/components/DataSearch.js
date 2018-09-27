import React from 'react';

const DataSearch = function (props) {

function handleSearchButton(event){
  props.getWikiData(event);
}

  return (
    <div className='search-bar'>
      <form onSubmit={handleSearchButton}>
        <input
          type="text"
          placeholder="Search For..."
          onKeyUp={props.searchKeyUp}
        />
        <input
          className="data-search-button"
          type="submit"
          name="submit"
          value="Search"
        />
      </form>
      <button className="data-search-button" onClick={handleSearchButton}>Write</button>
    </div>
  )
}

export default DataSearch;
