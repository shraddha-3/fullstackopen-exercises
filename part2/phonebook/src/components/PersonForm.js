import React from 'react'

const PersonForm = ({addNewNote, newName, newNumber, handleNewNumber, handleNewPerson}) => {
    return(
    <form onSubmit={addNewNote}>
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