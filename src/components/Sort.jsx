import React from 'react'

const Sort = ({ setSort }) => {
  return (
    <select
      name="sort"
      className='sort-opt'
      onChange={(e) => setSort(e.target.value)}
    >
      
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="America">America</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
  
}

export default Sort