import React from 'react'
import { useState } from 'react'
import './Form.css'

const Form = ({person, setPerson, setShow}) => {
  const [error, setError] = useState(false)

  const mailformat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(person)
    if(person.name.length > 5 && mailformat.test(person.email)) {
        setShow(true)
        setError(false)
    } else {
        setError(true)
        setShow(false)
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input id="name" onChange={(e) => setPerson((prev) => ({...prev, name: e.target.value}))}></input>
        <label>Email</label>
        <input id="email" onChange={(e) => setPerson((prev) => ({...prev, email: e.target.value}))}></input>
        <button>Enviar</button>
      </form>
      {error ? <span className="error">Por favor verifique su información nuevamente</span> : null}
      
    </div>
  )
}

export default Form