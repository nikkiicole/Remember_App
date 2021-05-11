import React from 'react'

function Search() {
  return (
    <div>
      <h1>Search For Memoirs</h1>
      <input
                type='text'
                name='search'
                id='search'
                autocomplete="off"
                placeholder='Search user here...'

            />
    </div>
  )
}

export default Search
