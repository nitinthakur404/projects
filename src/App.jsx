import React from 'react'
import Menu from '../src/menu/Menu.jsx'
import './Menubar.css'
import '../src/Contactus.css'
import Aboutus from '../src/Aboutus'
import Servicecompofun from './menu/Servicecompofun'
import Contactus from '../src/Contactus'


// import Servicecompo from './menu/Servicecompo'

let App = () => {
    return (
        <>
            <img src="../public/logo.jpg"></img>
            <div className="box-wrapper">
                <Menu />
                <Servicecompofun />
                <Aboutus />
                <Contactus />
            </div>

        </>
    )

}
export default App

