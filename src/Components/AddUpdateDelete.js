import React, { Component } from 'react'
import axios from 'axios'

class AddUpdateDelete extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         products:[],
         productsName:""
      }
    }
    addProduct=(event)=>{
        let products = this.state.products;
        products.push(this.state.productsName)
        const updatedValue ={products:products}
        this.setState(updatedValue)
    }
    updateProduct=(event)=>{
        let products = event.target.value;
        const updatedValue ={productsName:products}
        this.setState(updatedValue)
    }
    deleteProduct=(event)=>{
        let products =event.target.value
        axios.delete(products);
        

    }
  
    
  render() {
    return (
      <div>
        <h1>Add products</h1>
        <label htmlFor='product'> Product: </label>
        <input id='product' type='text' value={this.state.productsName} onChange={this.updateProduct} /> 
        <button onClick={this.addProduct}>Add product</button>
        <h1>Product List</h1>
              {
                this.state.products.map((product,i)=>(<div>
                    <li>{product}</li>
                    <button value={i} onClick={this.deleteProduct}>delete</button>
                </div>))
              }
      </div>
    )
  }
}

export default AddUpdateDelete
