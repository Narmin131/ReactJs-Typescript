import React, { useEffect, useState } from 'react'
import { SingleCountry } from '../types';
import axios from 'axios';
import CountryItem from './CountryItem';

const Countries = () => {

  const [country, setCountry] = useState<SingleCountry[]>([]);

  useEffect(() => {

    axios
      .get('https://restcountries.com/v2/all')
      .then(res => setCountry(res.data))
      .then(error => console.log({ error }))

  }, [])



  // useEffect(() => {

  //   fetch('https://restcountries.com/v2/all')
  //     .then(res => res.json())
  //     .then(res => setCountry(res))

  // }, [])

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center align-items-center p-2">
            <h1 style={{ fontWeight: 'bold', letterSpacing: "3px" }}>Countries</h1>
          </div>

          {country.map((item) => (

            <CountryItem
              key={item.name}
              name={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
              flag={item.flag}
            />

          ))}

        </div>
      </div>
    </div>
  )
}

export default Countries

