import {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [search, setSearch] = useState()
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setAllCountries(response.data)
        console.log(typeof(allCountries))
      })
      
  }, [])


  const handleFilter = (event) => {
    const filter = event.target.value
    setSearch(filter)
    }

    useEffect(() =>  {const regex = new RegExp( `^${search}`, 'i' ); 
    const filteredCountries = () => allCountries.filter(country => country['name']['common'].match(regex))
    setCountries(filteredCountries)
  },[search])
    

  return (
    <>
      <Filter search={search} onChange={handleFilter}/>
      <Countries countries={countries} />
    </>
  );
}

export default App;
