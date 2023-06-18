import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'bootstrap';
import { useState } from "react";

class Cart extends React.Component {
    constructor(props) {
        // It will call constructor method in Parent Class
        super(props);
        this.state = {
            Products: [],
            // carts: [],
            product_name: "",
            product_price: 0,
            quantity: 0,
            cart: 0,
            id: 0,
            product_id: 0,
            searchProduct: "",
            totalItems: 0,
            total: 0,

            final_price: 0,
            user_id: 0,
            order_details: [],
            date: "",
            objects: []


            // cartItems: []


        };
        this.setState({ user_id: localStorage.getItem("user_id") });
        console.log(localStorage.getItem("user_id"));

        // this.showCart();

        // let sw = [1, 2, 3, 4, 5];
        // sw.map((a) => (console.log(a)));
    }
    componentDidMount() {
        this.showCart();
    };


    // goToReport=()=>{
    //     window.location.href = 'report';
    // }


    showCart = (event) => {
        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: localStorage.getItem("user_id"),
                // product_id: event.target.value
                // product_id: event.target.getAttribute('product_id')

            })
        };

        fetch("http://localhost:8082/show_cart", postData)
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    console.log(res);
                    const updatedValue = { Products: res };
                    let totalItems = 0;
                    let total = 0;
                    this.setState({ totalItems: 0, total: 0 })

                    for (const item of res) {
                        totalItems += item.count
                        // this.state.totalItems = item.quantity

                        console.log(item.count);
                        console.log(item.product_price);
                        console.log(item.final_price);

                        total += item.final_price * item.count
                        console.log(item.final_price);

                        // this.state.totalPrice += item.product_price * item.quantity



                    }
                    console.log('total item: ' + totalItems)
                    console.log('total price: ' + total)
                    this.setState({ totalItems: totalItems, total: total });

                    this.setState(updatedValue);
                    this.setState({ order_details: JSON.stringify(res) });


                }
            )




    }
    // delete single cart item
    deleteSingleProductCart = (event) => {

        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                product_id: event.target.value
                // product_id: event.target.getAttribute('product_id')
            })
        };
        // console.log(postData);

        fetch("http://localhost:8082/delete_cart_single_product", postData)
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    console.log(res);
                    if (res.success) {
                        this.showProduct();
                        // window.location.reload(true);


                        // this.addCart();
                    }
                }
            )
    }

    updatedeleteProductSingle = (event) => {
        let sw = event.target.value;
        const updatedValue = { deletesingleProductcart: sw };
        this.setState(updatedValue);
    }

    // delete multiple id cart item
    deleteIdProductCart = (event) => {

        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                product_id: event.target.value
            })
        };

        fetch("http://localhost:8082/delete_cart_by_product_id", postData)
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    console.log(res);
                    if (res.success) {

                        this.showProduct();

                        // this.addCart();
                    }
                }
            )
    }
    deleteIdCart = (event) => {
        let sw = event.target.value;
        console.Console.log(sw)
        const updatedValue = { deleteIdProductCart: sw };

        this.setState(updatedValue);
        // window.location.reload(true);

    }


    addCart = (event) => {
        let cart = event.target.value
        const updatedValue = { cart: cart }
        this.setState(updatedValue)
        // window.location.reload(true);

        alert('add to cart success')


        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: localStorage.getItem("user_id"),

                // product_id: event.target.value,
                product_id: event.target.getAttribute("product_id")

            })
        };

        fetch('http://localhost:8082/add_cart', postData)
            .then(
                res => res.json()
            )
            .then(
                res => {
                    console.log(res)
                    if (res.success) {
                        this.showCart();

                        // this.setState({ loggedIn: true });
                        // this.setState({ username: res.user_details.first_name });


                    }
                    else {
                        // this.setState({ loggedIn: false });
                        // this.setState({ error: "Wrong credentials" });

                    }
                }
            );
    }
    placeOrder = (event) => {

        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                user_id: localStorage.getItem("user_id"),
                order_details: this.state.order_details,
                total_payable: this.state.total,

            })
        };

        fetch('http://localhost:8082/order_place', postData)
            .then(
                res => res.json()
            )
            .then(
                res => {
                    console.log(res)
                    if (res.success) {
                        alert("Order successfully placed!!")
                    }
                    else {
                        alert("Failed to placed Order!!")
                    }

                }
            );
        // fetch('http://localhost:8082/delete_all', postData)
        //     .then(
        //         res => res.json()
        //     )
        //     .then(
        //         res => {
        //             console.log(res)
        //             if (res.success) {
        //                 alert("cleared for userid?!!");

        //             }
        //             else {
        //                 alert("Failed !!");
        //             }
        //         }
        //     );

    }

    render() {
        let sw;
        sw = <div>

            {/* <h1> Products List: </h1> */}
            <br></br>
            <div className='row'>
                <div className="col-lg-4"></div>

                <div className="col-lg-4">
                    <div className="input-group">
                        <div className="form-outline">
                            {/* <input value={this.state.deleteproduct} onChange={this.updatedeleteProduct} type="search" id="form1" className="form-control" /> */}
                        </div>

                    </div>
                </div>
            </div>

            <div className='row'>
                {
                    this.state.Products.map(
                        (product, i) => (
                            <div className="col-lg-2 border p-3 bg-white " style={{ marginLeft: "20px", marginTop: "20px" }}>
                                <img className="img-thumbnail" src={product.product_image} style={{ height: "150px", width: "150px" }} />
                                <h4 className='text-capitalize'>{product.product_name}</h4>
                                <h6>Rs. {product.product_price} /-</h6>
                                {/* <h6> count: {product.count} </h6> */}
                                {/* <h6>quan: {product.quantity} </h6> */}

                                <button className='btn btn-dark' product_id={product.product_id} onClick={this.addCart}>+</button>
                                <button className='m-3'>{product.count}</button>

                                <button className='btn btn-dark' product_id={product.product_id} onChange={this.updatedeleteProductSingle} onClick={this.deleteSingleProductCart}>-</button>

                                <br></br>

                                <button className='btn btn-dark m-3' value={product.product_id} onChange={this.deleteIdCart} onClick={this.deleteIdProductCart}> Delete </button>


                            </div>
                        )
                    )
                }


            </div>
            <p>Total Items: {this.state.totalItems}</p>
            <p>Total Price: {this.state.total} Rs.</p>

            <br></br>
            <button className='btn btn-dark' onClick={this.placeOrder}>Place Order</button>



        </div>;


        return (sw);
    }
}

export default Cart;