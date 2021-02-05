import React from 'react'

// import stranger from '../img/stranger.jpg'
// let image1 = '4.jpg'

function Servicecompo(props) {

    return (
        <>
            <div className="card"x>

                <div className="cards">
                    <div className="img_card">
                        <img src={props.img} alt="stranger thing"></img>
                    </div>
                    <div className="heading_card">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="details">
                        <p>Expotens Should make sure that the  cost what be calcauated arrived the price  reduction in profit out are</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Servicecompo
