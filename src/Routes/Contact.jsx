import React, { useState } from 'react'
import Form from '../Components/Form'

const Contact = () => {

  const [person, setPerson] = useState({
    name: '',
    email: ''
  })
  const [show, setShow] = useState(false)

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form person={person} setPerson={setPerson} setShow={setShow}/>
      {show ? 
        <h4>Gracias {person.name}, te contactaremos cuando antes vía mail.
        </h4>
        :
        null
      }
    </div>
  )
}

export default Contact