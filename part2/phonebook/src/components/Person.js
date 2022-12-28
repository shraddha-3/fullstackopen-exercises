import React from 'react'

const Person = ({id, name, number, deletePerson}) => {
    return(
        <li>{name} {number} <button onClick={() => deletePerson(id)} value={id}>delete</button></li>
    )
}

export default Person