import React from 'react';

const DataSearch = function (props) {

function handleSearchButton(){
  props.getWikiData();
}

  return (
    <div className='searchxxx'>
      <button onClick={handleSearchButton}>Write</button>
    </div>
  )
}

export default DataSearch;
