import React, { Component } from 'react'
import ReactDOM from 'react-dom'; 
class DomConcept extends Component {
    constructor(props) {
      super(props)
    this.DomNode1 = this.DomNode1.bind(this)
     
    }
    DomNode1(){
        var myDiv =document.getElementById('myDivOne');
        ReactDOM.findDOMNode(myDiv).style.color ='red';
    }
    
  render() {
    return (
      <div>
        <h2>Dom concept change color.</h2>
        <button onClick={this.DomNode1}>Node1</button>
        <h3 id='myDivOne'>aaaaaaaaa</h3>
        
      </div>
    )
  }
}

export default DomConcept
