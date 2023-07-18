import React, { useState } from 'react'
import Search from './components/Search'
import Sort from "./components/Sort";
import Countries from './components/Countries';
import Header from './components/Header';


const App = () => {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")


  return (
    <div className='container'>
      <Header />
      <div className='hero-wrapper'>
        <div className='filter-wrapper'>
          <Search search={search} setSearch={setSearch} />
          <Sort setSort = {setSort}/>
        </div>
        <Countries search={search} />
      </div>
    </div>
  )
}

export default App