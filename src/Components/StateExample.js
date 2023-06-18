import React, { Component } from 'react'

class StateExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayBio: false
        }
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
        return (
            
            <div>
                <h1> Welcome to JavaTpoint!! </h1>
                {this.state.displayBio ? (<div>
            <p>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. 
                We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</p>
            <button onClick={this.toggleDisplayBio}> Show Less </button>
        </div>):(
            <div>
                <button onClick={this.toggleDisplayBio}> Read More </button>
            </div>
        )}
               
            </div>
            
        )
        
    }
}

export default StateExample
