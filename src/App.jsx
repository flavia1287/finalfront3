import { Route, Routes } from 'react-router-dom'
import './App.css'
import { routes } from './utils';
import Layout from './Layout/Layout';
import PageNotFound from './Routes/PageNotFound';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';

function App() {

  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.detail} element={<Detail/>}/>
          <Route path={routes.contact} element={<Contact/>}/>
          <Route path={routes.favs} element={<Favs/>}/>
          <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App
