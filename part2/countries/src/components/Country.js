import React from 'react'

const Country = ({country}) => {
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

export default Country