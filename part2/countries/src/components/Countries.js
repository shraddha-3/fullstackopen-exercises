import React from 'react'
import Country from './Country'

const Countries = ({countries, setCountries}) => {
  console.log(countries.length)
  if(countries.length > 10)
  {
    return(
      <div>
        Too many matches, specify other filter
      </div>
    )
  }

  else if (countries.length === 1)
  {
    const country = countries[0]
    return(
    <Country country={country} />)
  }

  else{
      console.log(countries[0])
      return(
      <ul>
        {countries.map(country => 
        <li key={country.name.common}>
            {country['name']['common']} <button onClick={() => setCountries([country])}>show</button>
        </li>)}
      </ul>)
  }
}

export default Countries