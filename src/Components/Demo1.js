import React, { Component } from 'react';  
// import StudentName from './Students';


class First extends React.Component {  
    constructor(props) {
      super(props)
    
      this.state = {
         data:[{'name':'pall'},{'name':'shu'},{'name':'swap'},{'place':'Amt'}]
      }
    }
    
    render() {  
       return (  
          <div>  
             {/* <StudentName /> */}
             <ul>{this.state.data.map((item)=><List data ={item} />)}</ul>
             {/* <ul>{this.state.data.map(item)}</ul> */}

          </div>  
       );  
    }  
 }  

 class List extends React.Component {  
    render() {  
       return (  
          <ul>  
            <li>{this.props.data.name}{this.props.data.place}</li>

          </ul>  
       );  
    }  
 } 
 export default First
