import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useContextGlobal } from '../Components/utils/global.context'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const {state} = useContextGlobal()
    return (
        <div className={state.theme == 'light' ? "App" : "App dark"}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout