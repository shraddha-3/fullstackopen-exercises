import React from 'react'
import Person from './Person'

const Persons = ({deletePerson, persons}) => {
    console.log(persons.length)
    if(persons.length > 0)
    {
        
        return(
        <ul>{persons.map(person => <Person key={person.id} name={person.name} number={person.number} deletePerson={deletePerson} id={person.id}/>)}</ul>
    )
    }

    return null
    
}

export default Persons