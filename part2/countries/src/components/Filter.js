import React from 'react'

const Filter = ({search, onChange}) => {
  return(
    <div>
      find countries : <input value={search} onChange={onChange}/>
    </div>
  )
}

export default Filter