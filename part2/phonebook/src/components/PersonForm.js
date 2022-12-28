import React from 'react'

const PersonForm = ({onSubmit, newName, newNumber, handleNewNumber, handleNewPerson}) => {
    return(
    <form onSubmit={onSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewPerson}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    ) 
}

export default PersonForm