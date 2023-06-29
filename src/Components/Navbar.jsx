import React from 'react'
import { useContextGlobal } from './utils/global.context'
import { routes } from '../utils'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const {state, dispatch} = useContextGlobal()

  return (
    <nav>
      <div className='links'>
          {/* se pone el a por tema de estilos*/}
          <a>
            <h4 className='link' onClick={() => navigate(-1)}>↩Back</h4>
          </a>
          <Link to={routes.home}><h4 className='link'>Home</h4></Link>
          <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
          <Link to={routes.favs}><h4 className='link'>Favs</h4></Link>
      </div>
      {
        state.theme == 'dark' 
        ? <button onClick={() => dispatch({type: 'LIGHT'})}>🌞</button>
        : <button onClick={() => dispatch({type: 'DARK'})}>🌜</button>
      }
    </nav>
  )
}

export default Navbar