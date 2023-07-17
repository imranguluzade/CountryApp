import React, { useEffect, useState } from 'react'
import Country from './Country'
import axios from 'axios'

const Countries = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getCountries = async () => {
            setLoading(true);   // loading effect started
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all")
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);  // loading effect stopped
        }
        getCountries();

    }, [])

    if(loading){
        return <div className='loading-title'>Loading...</div>
    }

    if(error !== null){
        return <div className='error'>{error.message}</div>
    }

    return (
        <div className='countries'>
            {data.map((olke, index) => <Country key={index} props={olke} />)}
        </div>

    )
}

export default Countries