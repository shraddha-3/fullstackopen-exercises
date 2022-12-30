import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

const Weather = ({country}) => {
    const [weather, setWeather] = useState([])
    const lat = country.capitalInfo.latlng[0]
    const lng = country.capitalInfo.latlng[1]
    console.log(lat)
    const api_key = process.env.REACT_APP_API_KEY
    console.log(api_key)
    
    useEffect(() => {
    console.log('effect')
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`)
    .then(response => {setWeather(response.data)
    console.log(response.data)})
    }, [])
    
    if(weather.main)
    {
        const temp = Math.round(weather.main.temp - 273.15)
    
    
        return(
            <>
        
            <div>
            <h2>Weather in {country.capital}</h2>
            <div>Temperature: {temp}°C</div>
            <img
                alt="weather icon"
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
            <div>Wind {weather.wind.speed} m/s</div>
            </div>
    
            </>
        )
    }
    else 
    return null
}

export default Weather