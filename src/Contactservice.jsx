import React from 'react'
import '../src/Contactservice.css'

function Contactservice(props) {
    return (
        <div className="contact-services-container">
            <ul>
                <li className="li-heading">{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
                <li>{props.li4}</li>
                <li>{props.li5}</li>
                <li>{props.li6}</li>
                <li>{props.li7}</li>
            </ul>
        </div>
    )
}

export default Contactservice
