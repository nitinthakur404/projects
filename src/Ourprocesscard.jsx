import React from 'react'

function Ourprocesscard(props) {
    return (
        <div className="process_card">
            <div className="process_round">
                <div className="icon">
                    <h1> {props.icon}
                    </h1>
                </div>
            </div>

            <div className="process_squre">
                <p>{props.firsttag}</p>
            </div>
            <div className="projectulli">
                <ul>
                    <li>{props.firstli}</li>
                    <li>{props.secondli}</li>
                    <li>{props.thirdli}</li>
                    <li>{props.fourthli}</li>
                </ul>
            </div>
        </div>
    )
}

export default Ourprocesscard;
