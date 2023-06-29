import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";

export const ContextGlobal = createContext();

export const initialState = {
  theme: 'light', 
  dentists: [],
  favs: JSON.parse(localStorage.getItem('favs')) || []
}

const dentistsUrl = 'https://jsonplaceholder.typicode.com/users';

const reducer = (state, action) => {
    switch(action.type){
        case 'LIGHT':
            return {...state, theme:'light'}
        case 'DARK':
            return {...state, theme:'dark'}
        case 'LIKE':
            if (!state.favs.find(e => e.username === action.payload.username)) {
                return {...state, favs:[...state.favs, action.payload]}
            }
            return state
        case 'GET_LIST':
            return {...state, dentists: action.payload}
        default: 
            throw new Error()
    }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

      
  useEffect(() => {
    axios(dentistsUrl)
    .then(res => dispatch({type: 'GET_LIST', payload: res.data}))
  }, [])
    
  useEffect(() => {
      console.log(state)
      localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state])

  return(
      <ContextGlobal.Provider value={{
          state, dispatch
      }}>
          {children}
      </ContextGlobal.Provider>
  )
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)
