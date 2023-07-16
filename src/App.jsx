import React from 'react'
import Search from './components/Search'
import Sort from "./components/Sort";
import Countries from './components/Countries';
import Country from './components/Country';
import Header from './components/Header';


const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='hero-wrapper'>
        <div className='filter-wrapper'>
          <Search />
          <Sort />
        </div>
        <Countries />
      </div>
    </div>
  )
}

export default App