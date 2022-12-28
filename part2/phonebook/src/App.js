import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearch] = useState('')
  const [deleteNameId, setDeleteId] = useState(0)

  useEffect(() => {
    console.log('effect')
    personService
    .getAll()
    .then(initialPersons => {
        setPersons(initialPersons)
    })
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault();
    const nameObject =
      {name: newName, number: newNumber}
    if (newName==='' || newNumber==='')
    return

    if (persons.some(person => person.name===newName && person.number===newNumber))
    {
      alert(`${newName} has already been added to the phonebook`)
      return
    }

    else if (persons.some(person => person.name===newName && person.number!==newNumber))
    {
      const per = persons.find(person => person.name === newName)
      const nameObj = {...per, number: newNumber}
      console.log(nameObj)
      if(window.confirm(newName + "has already been added to the phonebook, replace with new number?"))
      {
        personService
        .update(nameObj.id, nameObj)
        .then(returnedPerson => {
      setPersons(persons.map(person => person.id === returnedPerson.id? returnedPerson: person))})
        setNewName('')
        setNewNumber('')
      }
    }

    else{
      personService
    .create(nameObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
    }
    
  }

  const handleNewPerson = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setSearch(event.target.value)
    const regex = new RegExp( `^${searchName}`, 'i' ); 
    const filteredPersons = () => persons.filter(person => person.name.match(regex))
    setPersons(filteredPersons)

    
  }

  const handleDeletePerson = (id) => {
    
    if (window.confirm("Are you sure?"))
    {
      personService.deletePerson(id)
      console.log(persons)
      const filteredPersons = () => persons.filter(person => person.id !== id)
      setPersons(filteredPersons)
      console.log(persons.length)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchName} onChange={handleFilter}/>
      <h3>add note</h3>
      <PersonForm onSubmit={addNewPerson} newName={newName} handleNewPerson={handleNewPerson} newNumber={newNumber} handleNewNumber={handleNewNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} deletePerson={handleDeletePerson}/>
    </div>
  )
}

export default App
