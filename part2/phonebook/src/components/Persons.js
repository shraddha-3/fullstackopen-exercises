import React from 'react'
import Person from './Person'

const Persons = ({deletePerson, persons}) => {
    return(
        <ul>{persons.map(person => <Person key={person.id} name={person.name} number={person.number} deletePerson={deletePerson} id={person.id}/>)}</ul>
    )
}

export default Persons