import React from "react";
import { Link } from 'react-router-dom'
import { useContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const {dispatch} = useContextGlobal()

  const addFav = ()=>{
    dispatch({type: 'LIKE', payload: {
      name: name,
      username: username,
      id: id
    }})
  }

  return (
    <div className="card">
        <Link to={'/dentist/' + id}>
          <img src="/images/doctor.jpg"/>
          <h4>{name}</h4>
          <h5>{username}</h5>
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐️</button>
    </div>
  );
};

export default Card;