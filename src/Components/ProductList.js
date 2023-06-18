import React, { Component } from 'react'

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Products: [],
            categories: [],
            product_name: "",
            product_price: 0,
            quantity: 0,
            cart: 0,
            id: 0,
            product_id: 0,
            searchProduct: "",

            category_id: 0,
            category_name: "",
            searchCategory:""
        }
        this.showProduct();

    };

    // category code
    componentDidMount = () => {
        this.showCategory();
    }

    showCategory = (event) => {
        fetch("http://localhost:8082/show_category")
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    // console.log("res");
                    const updatedValue = { categories: res };
                    this.setState(updatedValue);
                    // console.log(this.state.categories);

                }
            )

    }
    
    searchCategory = (event) => {
        let sw=event.target.value
        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                category_id: event.target.getAttribute('category_id')

            })
        };

        fetch("http://localhost:8082/search_category", postData)
            .then(

                res => (res.json())
            )
            .then(
                (res) => {
                    const updatedValue = { Products: res };
                    this.setState(updatedValue);
                    console.log(this.setState(updatedValue));

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
    //
    

    gotoproductCategory = (event) => {
        console.log("event")
        console.log(event)

        window.location.href = "?category_id=" + event.target.getAttribute('category_id');
        console.log(window.location.href)

    }

//
    showProduct = () => {
        fetch('http://localhost:8082/get_product_list')
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    console.log(res);
                    const updatedValue = { Products: res };
                    this.setState(updatedValue);
                    console.log(updatedValue);


                }
            )
    }

    searchProduct = (event) => {
        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                search: this.state.searchProduct

            })
        };

        fetch("http://localhost:8082/search_product", postData)
            .then(

                res => (res.json())
            )
            .then(
                (res) => {
                    const updatedValue = { Products: res };
                    this.setState(updatedValue);
                    console.log(this.setState(updatedValue));


                }   
            )

    }

    updateSearchProduct = (event) => {

        let sw = event.target.value;
        console.log(event.target.value);
        const updatedValue = { searchProduct: sw };
        this.setState(updatedValue);
        console.log(updatedValue);

    }
    addCart = (event) => {
        let cart = event.target.value
        console.log(event.target.value)
        const updatedValue = { cart: cart }
        this.setState(updatedValue)
        console.log(this.state.cart);
        alert('add to cart success')


        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                product_id: event.target.value,


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
                        this.setState({ loggedIn: true });
                        this.setState({ username: res.user_details.first_name });

                    }
                    else {
                        this.setState({ loggedIn: false });
                        this.setState({ error: "Wrong credentials" });

                    }
                }
            );
    }

    gotoproductDescription = (event) => {
        window.location.href = "product_description?product_id=" + event.target.getAttribute('product_id');

    }
    

    render() {
        let flag = true
        let sw;
        sw = <div>
            {/* <h1> Products List: </h1> */}
            <div className='row pt-5'>
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="input-group">
                        <div className="form-outline">
                            <input value={this.state.searchProduct} onChange={this.updateSearchProduct} type="search" name='search' id="form1" className="form-control" />
                        </div>
                        <button onClick={this.searchProduct} type="button" className="btn btn-primary">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                </div>

            </div>
            <div className="container-fluid m-1 p-1">
                <div className='row'>
                    <div className='col-3 col-md-3'>
                        <div className="border border-gray p-3 mt-5 ">
                            <table className="table p-3">
                                <thead style={{ backgroundColor: "gray" }}>
                                    <tr className='p-3'>
                                        <th className='justify-content-center' scope="col">Category Name</th>
                                    </tr>
                                </thead>

                                {
                                    this.state.categories.map((category, i) => (
                                        <tbody>
                                            <tr category_id={category.category_id} onClick={this.searchCategory}>
                                                <td category_id={category.category_id} onClick={this.searchCategory}>{category.category_name}</td>
                                            </tr> 

                                        </tbody>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                    <div className='col-9 col-md-9'>
                        <div className='row mt-5'>

                            {/* show data */}
                            {
                                this.state.Products.map((product, i) => (
                                    <div className="col-lg-2 border p-3 bg-white" style={{ marginLeft: "10px" }}>
                                        <img className="img-thumbnail" onClick={this.gotoproductDescription} product_id={product.product_id} src={product.product_image} style={{ height: "150px", width: "150px" }} />
                                        <h3 className='text-capitalize'>{product.product_name}</h3>
                                        <h5>Rs. {product.product_price} /-</h5>
                                        <h6>quantity : {product.quantity}</h6>
                                        <button className="btn btn-secondary" value={product.product_id} onClick={this.addCart}>Add to cart</button>
                                        {/* <button className='btn btn-secondary p-3 m-3' product_id={product.product_id} onClick={this.gotoproduct}>Edit</button> */}

                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>

        return (sw)
    }
}

export default ProductList
