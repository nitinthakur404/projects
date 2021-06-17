import React, { Component } from 'react'
import Childcomponant from './Childcomponant'


class Parentscomponant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parent: 'papa'
    }
    // this.eventhandler = this.eventhandler.bind(this)
  }
  
  eventhandler = () => {
    this.setState({
      parent: 'nitin'
    })

  }
  render() {
    return (
      <>
        <h1>this is form {this.state.parent} parent</h1>
        {/* <button onClick={this.eventhandler} >update</button> */}
        <Childcomponant propshandler={this.eventhandler} />
      </>
    )
  }
}

export default Parentscomponant;
