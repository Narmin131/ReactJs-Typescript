import React from 'react'
import { SingleCountry } from '../types'

const CountryItem = ({
  name,
  population,
  region,
  capital,
  flag
}: SingleCountry) => {

  return (
              <div className="col-lg-4 p-3" >
                <div className="card" style={{ width: '100%',height:'100%' }}>
                  <img src={flag} className="card-img-top"  style={{ width: '100%',height:'100%' }}/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontWeight:'bold' }}> Country:{name}</h4>
                    <h6 className="card-title">Capital:{capital}</h6>
                    <h6 className="card-title">Population:{population}</h6>
                    <h6 className="card-title">Region:{region}</h6>
                  </div>
                </div>
              </div>
  )
}

export default CountryItem