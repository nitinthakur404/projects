import React from 'react'
import Textcompo from './Textcompo'
import img11 from '../img/img11.jpg'
import Menubar from './Menubar'


function Menu() {

    // console.log(13.jpg)
    return (
        <>
            <div className="container">
                <div className="background_img">
                    <img src={img11} alt="image15"></img>
                    <Menubar />
                    <Textcompo />
                </div>
            </div>


        </>
    )
}

export default Menu
