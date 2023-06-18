import React, { Component } from 'react'
import Category from './Category'

class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Products: [],
            product_name: "",
            product_price: 0,
            quantity: 0,
            product_description: "",
            selectedFile: null,
            selectedFileName: null,
            product_image: "",
            product_id: 0,

            categories: [],
            category: 0,
            category_id: 0,
            category_name: ""


        }
        this.showProduct();

    }

    componentDidMount() {
        this.showCategory();

    }


    updateProductname = (event) => {
        let products = event.target.value
        const updatedValue = { product_name: products }
        this.setState(updatedValue)

    }
    updateProductprice = (event) => {
        let products = event.target.value
        const updatedValue = { product_price: products }
        this.setState(updatedValue)

    }
    updateProductquantity = (event) => {
        let products = event.target.value
        const updatedValue = { quantity: products }
        this.setState(updatedValue)

    }
    updateProductDescription = (event) => {
        let products = event.target.value
        const updatedValue = { product_description: products }
        this.setState(updatedValue)

    }

    addProduct = (event) => {

        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                product_name: this.state.product_name,
                product_price: this.state.product_price,
                quantity: this.state.quantity,
                product_description: this.state.product_description,
                product_image: this.state.product_image,
                category_id: this.state.category_id



            })
        };

        fetch('http://localhost:8082/insert_product', postData)
            .then(
                res => res.json()
            )
            .then(
                res => {
                    console.log(res)
                    if (res.success) {
                        alert("Product successfully added!!")
                    }
                    else {
                        alert("Failed to add the Product!!")
                    }

                }
            );

    }

    deleteProduct = (event) => {
        let index = event.target.value;
        console.log("index");
        console.log(index);
    }

    onImageChange = (event) => {
        console.log('event.target.files');
        console.log(event.target.files);
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            this.setState({
                selectedFile: event.target.files[0],
                selectedFileName: event.target.files[0].name

            })
            console.log("this.state.image")
            console.log(this.state.img)
        }
    }
    updateImage = (event) => {

        let sw = event.target.value;
        const updatedValue = { product_image: sw };
        this.setState(updatedValue);
    }
    showProduct = () => {
        fetch('http://localhost:8082/get_product_list')
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    console.log(res);
                    const updatedValue = { Products: res };
                    for(const item of res){
                        item.final_price = item.product_price - ((item.product_price * item.discount)/100)
                    }
                    console.log("Final price: " + this.state.final_price);

                    this.setState(updatedValue);
                    console.log(updatedValue);


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

    ChangeCategory = (event) => {
        let sw = event.target.value
        const updatedValue = { category_id: sw }
        console.log(updatedValue);
        this.setState(updatedValue)
        console.log('Selected: ', sw);
    }
    //redirect page
    gotoAddproduct = (event) => {
        window.location.href = "add_product"
        console.log(window.location.href)

    }
    gotoproductDescription = (event) => {
        window.location.href = "product_description?product_id=" + event.target.getAttribute('product_id');

    }
    //for update
    gotoproduct = (event) => {
        window.location.href = "update_product?product_id=" + event.target.value;
        console.log(window.location.href)

    }
    deleteProduct = (event) => {

        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                product_id: event.target.value
            })
        };

        fetch("http://localhost:8082/delete_product", postData)
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    console.log(res);
                    if (res.success) {
                        this.showProduct();
                    }
                }
            )
    }
    UpdatedeleteProduct = (event) => {
        let product = event.target.value;
        // console.Console.log(sw)
        const updatedValue = { deleteProduct: product };

        this.setState(updatedValue);
        // window.location.reload(true);

    }

    render() {
        let flag = true;

        let sw;
        sw = <div>
            {/* <h1>Add Product Info.</h1> */}

            <div className='row pt-5'>

                <div className='col-lg-4' />
                <div style={{ textAlign: "center" }}>
                    <button className='btn btn-secondary' onClick={this.gotoAddproduct}>Add Product</button>
                </div>

                <div className="container border border-gray p-3 mt-5 ">
                    <table className="table p-3">
                        <thead style={{ backgroundColor: "gray" }}>
                            <tr className='p-3'>
                                <th scope="col">#</th>
                                <th scope="col">product Image</th>
                                <th scope="col">product Name</th>
                                <th scope="col">product price</th>
                                <th scope="col">product quantity</th>
                                <th style={{ textAlign: "center" }} scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            this.state.Products.map((product, i) => (
                                <tbody>
                                    <tr>
                                        <td>{product.product_id}</td>
                                        <td><img className="img-thumbnail" onClick={this.gotoproductDescription} product_id={product.product_id} src={product.product_image} style={{ height: "150px", width: "150px" }} />
                                        </td>
                                        <td><h3 className='text-capitalize'>{product.product_name}</h3></td>
                                        <td><del>{product.product_price} Rs/-</del><p>{product.final_price} Rs/-</p><h5>Rs. {product.discount} %</h5></td>
                                        <td><h6>quantity : {product.quantity}</h6></td>

                                        <td style={{ textAlign: "center" }}>
                                            <button className='btn btn-secondary p-3 m-3' value={product.product_id} onClick={this.gotoproduct}>Edit</button>
                                            <button className='btn btn-secondary p-3 m-3' value={product.product_id} onChange={this.UpdatedeleteProduct} onClick={this.deleteProduct}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </table>
                </div>             

            </div>
        </div>

        return (sw
        )
    }
}

export default Product
