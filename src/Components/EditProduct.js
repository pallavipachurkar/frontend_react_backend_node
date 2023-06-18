import React, { Component } from 'react'

class EditProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Products: [],
            categories: [],
            product_name: "",
            product_price: 0,
            quantity: 0,
            product_image: "",
            product_id: 0,
            cart: 0,
            id: 0,
            
            searchProduct: "",

            category_id: 0,
            category_name: "",
            searchCategory: ""
        }
    }
    componentDidMount() {
        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        console.log(urlParams);
        const product_id = urlParams.get('product_id')
        console.log(product_id);
        this.setState({product_id:product_id});
        this.showReqProduct(product_id);
        this.showCategory();
    }
    showReqProduct = (product_id) => {
        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                product_id: product_id

            })
        };
        fetch("http://localhost:8082/get_product", postData)
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    console.log(res);
                    const updatedValue = { Products: res };
                    this.setState(updatedValue);
                    this.setState({ product_name: res[0].product_name });
                    this.setState({ product_price: res[0].product_price });
                    this.setState({ quantity: res[0].quantity });
                    this.setState({ product_description: res[0].product_description });
                    this.setState({ product_image: res[0].product_image });
                    this.setState({ product_id: res[0].product_id });
                    console.log('this.setState({ product_id: res[0].product_id })');

                    this.setState({ category_id: res[0].category_id });

                }
            )
    }

    showCategory = (event) => {
        fetch("http://localhost:8082/show_category")
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    console.log("res");
                    console.log(res);
                    const updatedValue = { categories: res };
                    console.log("updatedValue");
                    console.log(updatedValue);

                    this.setState(updatedValue);
                    console.log("this.state.categories");
                    console.log(this.state.categories);
                    this.setState({ category_id: res[0]['category_id'] });

                }
            )

    }
    updateProductname = (event) => {
        let product = event.target.value
        const updatedValue = { product_name: product }
        this.setState(updatedValue)
    }
  
    updateProductprice = (event) => {
        let products = event.target.value
        const updatedValue = { product_price: products }
        this.setState(updatedValue)

    }
    updateProductquantity = (event) => {
        let product = event.target.value
        const updatedValue = { quantity: product }
        this.setState(updatedValue)

    }
    updateProductDescription = (event) => {
        let product = event.target.value
        const updatedValue = { product_description: product }
        this.setState(updatedValue)

    }
    updateImage = (event) => {

        let product = event.target.value;
        const updatedValue = { product_image: product };
        this.setState(updatedValue);
    }
    changeCategory = (event) => {
        let product = event.target.value
        const updatedValue = { category_id: product }
        console.log(updatedValue);
        this.setState(updatedValue)
        console.log('Selected: ', product);
    }
    updateProduct = (e) => {

        let product = this.state.Products
        const updatedValue = { Products: product }
        this.setState(updatedValue)

        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                // product_id: e.target.getAttribute('product_id'),
                product_id:this.state.product_id,
                product_name: this.state.product_name,
                product_price: this.state.product_price,
                quantity: this.state.quantity,
                product_description: this.state.product_description,
                product_image: this.state.product_image,
                category_id: this.state.category_id

            })
        };

        fetch("http://localhost:8082/update_product", postData)
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    console.log(res);
                    if (res.success) {
                        alert("product successfully updated!!");

                    }
                    else {
                        alert("Failed to update product!!");
                    }
                }
            )
    }

    render() {
        let sw;
        sw =

            <div className='row'>

                <div className='col-lg-4' />

                <div className='col-lg-4'>

                    <div className='mb-3 mt-3'>
                        <label htmlFor='product_name' className="form-label">Product Name: </label>
                        <input id='product_name' className="form-control" type='text' value={this.state.product_name} onChange={this.updateProductname} name="product_name" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='product_price' className="form-label">Product Price: </label>
                        <input id='product_price' type='number' className="form-control" value={this.state.product_price} onChange={this.updateProductprice} name="product_price" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='quantity' className="form-label">Product Quantity: </label>
                        <input id='quantity' type='number' className="form-control" value={this.state.quantity} onChange={this.updateProductquantity} name="quantity" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='product_description' className="form-label">Product Description: </label>
                        <input id='product_description' className="form-control" type='text' value={this.state.product_description} onChange={this.updateProductDescription} name="product_description" />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="product_image" className="form-label">Product Image:</label>
                        <input type="text" value={this.state.product_image} onChange={this.updateImage} className="form-control" id="product_image" placeholder="Enter Product Image" name="product_image" />
                    </div>
                    <div className="mb-3 mt-3">
                        <select className="form-select" value={this.state.category_id}
                            onChange={this.changeCategory} type="text">
                            {this.state.categories.map((option) => (
                                <option value={option.category_id}>{option.category_name}</option>
                            ))}

                        </select>
                    </div>

                    <button className='btn btn-primary' value={this.state.product_id} product_id={this.state.product_id} onClick={this.updateProduct}>update Product</button>

                </div>

            </div>

        return (sw)
    }
}

export default EditProduct
