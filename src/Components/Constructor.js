import React, { Component } from 'react'

class Constructor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: 'www.javatpoint.com'
        }
        this.handleEvent = this.handleEvent.bind(this)
    }
    handleEvent() {
        console.log(this.props);
    }

    render() {
        return (
            <div className="App">
                <h2>React Constructor Example</h2>
                <input type='text' value={this.state.data}></input>
                <button onChange={this.handleEvent}>click me</button>
            </div>
        )
    }
}

export default Constructor
