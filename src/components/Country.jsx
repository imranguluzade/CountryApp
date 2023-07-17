import React from 'react'

const Country = (props) => {
  return (
    <div className='country'>
        <img src={props.props?.flags.svg}/>
        <h4>Name:{props.props?.name?.common}</h4>
        <p>Region: {props.props?.region}</p>
        <p>Capital: {props.props?.capital}</p>
    </div>
  )
}

export default Country