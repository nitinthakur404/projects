import React from 'react'
import ReactDOM from 'react-dom'
function Childcomponant(props) {

    return (
        <div>
            <h1>this is your turn</h1>
            <button onClick={props.propshandler}>click me</button>
        </div>
    )
}

export default Childcomponant;
