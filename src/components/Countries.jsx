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
                console.log(response.data);
            } catch (error) {
                setError(error);

            }

            setLoading(false);  // loading effect stopped
        }
        getCountries();

    }, [])




    return (
        <div className='countries'>
            {data.map(olke =><Country key={olke.id}/>)}
        </div>

    )
}

export default Countries