import React, { useState } from 'react'

function Namecard(props) {
    let{ name, monthOfBirth, dataOfBirth } = props

    // const [state, setstate] = useState('')
    return (
        <div className="name">
            <p>{name}</p>
            <p>{monthOfBirth} {dataOfBirth}</p>
        </div>
    )
}

export default Namecard