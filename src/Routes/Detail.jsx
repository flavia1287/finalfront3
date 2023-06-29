import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const [detail, setDetail] = useState({})
  // const {favs, setFavs} = useRecipeStates()
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(url)
    .then(res => setDetail(res.data))
  }, [])

  return (
    <>
      <h1>Detail Dentist id </h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{detail.name}</td>
          <td>{detail.email}</td>
          <td>{detail.phone}</td>
          <td>{detail.website}</td>
        </tr>
      </table>
    </>
  )
}

export default Detail