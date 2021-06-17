import React, { useState } from 'react'
import reactDom from 'react-dom'
import Namecard from './namecard'
import Sdata from './Sdata'
// import Namecard from './Namecard'
import './State.css'

function State() {






    const [month, setmonth] = useState()
    const [datashow, setdatashow] = useState()

    // console.log(data)
    const onclick = () => {
        setdatashow(Sdata.filter(data => data.monthOfBirth == month))
    }
    const inputhandler = (event) => {
        setmonth(event.target.value)
    }
    return (
        <>
            <div className="container">
                <div className="heading">
                    <div className="Menubar">
                        <input type="text" onChange={inputhandler} className="inputbox"></input>
                        <button className="buttonclick" onClick={onclick}>search</button>
                    </div>
                </div>
                {/* container data and card making */}
                <div className="border-gradient">

                    {datashow?.map(({ name, monthOfBirth, dataOfBirth }) => <div className="inner-box">

                        <div className="name">
                            <Namecard name={name}
                                monthOfBirth={monthOfBirth}
                                dataOfBirth={dataOfBirth}
                            />
                        </div>
                    </div>)}

                </div>
            </div>
        </>
    )
}

export default State