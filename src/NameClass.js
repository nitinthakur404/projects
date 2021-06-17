import react, { Component } from 'react'
import ReactDOM from 'react-dom'
class NameClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'hello',
        }
        // this.clickButton = this.clickButton.bind(this)
    }
    clickButton = () => {

        this.setState({
            name: 'welcome'
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                
                {/* <button onClick={this.clickButton}>update</button> */}
                {/* <button onClick={this.clickButton.bind(this)}>update</button>  */}
                {/* <button onClick={() => this.clickButton()}>update</button> */}
            </>
        )
    }
}
export default NameClass;