import React, { useState } from 'react'

const Search = ({ setSearch }) => {

  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(value);
    setValue("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        className='search-i'
        placeholder='Search for a country...'
        onChange={(e) => (setValue(e.target.value))}
        value={value}
      />
    </form>
  )
}

export default Search