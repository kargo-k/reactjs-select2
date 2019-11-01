import React from 'react';

let Search = props => {

  return (
    <div className='select2 search-div'>
      <input
        className='select2 search'
        type='text'
        onChange={(e) => props.handleSearch(e)} />
    </div>)
}

export default Search