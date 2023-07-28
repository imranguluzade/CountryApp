import React, { useEffect, useState } from "react";
import Country from "./Country";
import axios from "axios";

const Countries = ({ search, sort }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("everything is ok this is test console");

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true); // loading effect started
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/${
            !search && !sort ? "all" : search ? "name/" + search : "region/"+ sort
          }`
        );
        setData(response.data);
        console.log(sort);
      } catch (error) {
        setError(error);
      }
      setLoading(false); // loading effect stopped
    };
    getCountries();
  }, [search, sort]);

  if (loading) {
    return <div className="loading-title">Loading...</div>;
  }

  if (error !== null) {
    return <div className="error">{error.message}</div>;
  }

  return (
    <div className="countries">
      {data.map((olke, index) => (
        <Country key={index} props={olke} />
      ))}
    </div>
  );
};

export default Countries;

//
