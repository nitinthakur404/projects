import React, { Component } from 'react'

class ReactConditional extends Component {
    constructor() {
        super()
        this.state = {
            youlogin: false
        }
    }
    loginhandler = () => {
        this.setState({
            youlogin: true
        })
    }

    render() {
        let message
        if (this.state.youlogin) {
            message = <h1>welcome to nitin</h1>
        }
        else {
            message = <h1>log in failed</h1>
        }
        return <div>
            {message}
            <button onClick={this.loginhandler} > click now </button>
        </div>

    }
}

export default ReactConditional;
