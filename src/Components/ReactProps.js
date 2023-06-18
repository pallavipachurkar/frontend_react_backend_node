import React, { Component } from 'react'

class ReactProps extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         lastname:'React'
      }
    }
    
  render() {
    return (
        <div>  
        <h1> Welcome to { this.props.name } </h1>    
        <p> <h4> Javatpoint is one of the best Java.school is {this.props.school}. </h4> </p>   
        <JTP jtpProps={this.state.lastname} />       
      </div> 
    )
  }
}
ReactProps.defaultProps={
    name:"pall",
    school:'v.m.v'
  }

class JTP extends React.Component {  
    render() {  
    return (  
        <div>  
            <h1>State & Props Example</h1>  
            <h3>Welcome to {this.props.jtpProps}</h3>  
            <p>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p>  
        </div>    
    );  
    }  
}

export default ReactProps
