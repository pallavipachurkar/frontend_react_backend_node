import React, { Component } from 'react'

class ForceUpdateMeth extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.ForceUpdateS = this.ForceUpdateState.bind(this)
    }
    ForceUpdateState (){
        this.forceUpdate()

    }
    
  render() {
    return (
      <div>
        <h1>Example of Random Number</h1>
        <h3>Random Number : {Math.random()}</h3>
        <button onClick={this.ForceUpdateS}>random no</button>
      </div>
    )
  }
}

export default ForceUpdateMeth
