import React, { useState } from 'react'

function Lifecycle() {
    const [state, setstate] = useState('red')
    let onchangeclick = () => {
        setstate('white')

    }

    return (
        <div>
            <h1 style={{ color: state, background: "black" }}>my name is nitin</h1>
            <button onClick={onchangeclick}>click</button>
        </div>
    )
}

export default Lifecycle
