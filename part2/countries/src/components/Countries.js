import React from 'react'

const Countries = ({countries}) => {
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
    
    const languages = Object.entries(country.languages)
    return(
      <>
      <h1>{country['name']['common']}</h1>
      <div>capital {country['capital']}</div>
      <div>area {country['area']}</div>
      <h3>languages</h3>
      <ul>
        {languages.map(language => <li key={language[0]}>{language[1]}</li>)}
      </ul>
      <img src={country.flag} alt="country flag"></img>
      </>
    )
  }

  else{
      console.log(countries[0])
      return(
      <ul>
        {countries.map(country => <li key={country.name.common}>{country['name']['common']}</li>)}
      </ul>)
  }
}

export default Countries