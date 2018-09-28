import React from 'react';

const DataSearch = function (props) {

function handleSearchButton(event){
  props.getWikiData(event);
}

function currentPath(){

}



  return (
    <div className='search-bar'>
      <form onSubmit={handleSearchButton}>
        <input
          className="search-field"
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

    </div>
  )

}

export default DataSearch;
