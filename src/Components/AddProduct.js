// import React from 'react'
// import { useState,useEffect } from "react";
// window.React = React

// export default function AddProduct() {

//     const addproduct = async () => {

//             var raw = JSON.stringify({
//                 product_name: product_name,
//                 product_price: product_price,
//                 quantity: quantity,
//                 product_description: product_description,
//                 product_image:product_image,
//                 category_id:category_id,
//                 discount:discount,
//                 final_price:final_price


//             });
//             var myHeaders = new Headers();
//             myHeaders.append("Content-Type", "application/json");
//             var requestOptions = {
//                 method: 'POST',
//                 headers: myHeaders,
//                 body: raw,
//                 redirect: 'follow'
//               };
//               fetch('http://localhost:8082/insert_product', requestOptions)
//             .then(
//                 res => res.json()
//             )
//             .then(
//                 res => {
//                     console.log(res)
//                     if (res.success) {
//                         alert("Product successfully added!!")
//                     }
//                     else {
//                         alert("Failed to add the Product!!")
//                     }

//                 }
//             );

//         } 



//     const [Products, setProduct]=useState([])



//     const [product_name, setProduct_nameValue]=useState("")
//     const onChangeproduct_nameValue = (event) => {
//         setProduct_nameValue(event.target.value);
//     }
//     const [product_price, setProduct_priceValue]=useState(0)
//     const onChangeproduct_priceValue = (event) => {
//         setProduct_priceValue(event.target.value);
//     }

//     const [discount, setdiscount]=useState(0)
//     const onChangediscount = (event) => {
//         setdiscount(event.target.value);
//     }

//     const [final_price, setfinal_price]=useState(0)
//     const onChangefinal_price = (event) => {
//         setfinal_price(event.target.value);
//     }
//     const [quantity, setQuantityValue]=useState(0)
//     const onChangeQuantityValue = (event) => {
//         setQuantityValue(event.target.value);
//     }


//     const [product_description, setproduct_descriptionValue]=useState("")
//     const onChangeproduct_descriptionValue = (event) => {
//         setproduct_descriptionValue(event.target.value);
//     }
//     const [product_image, setproduct_imageValue]=useState("")
//     const onChangeproduct_imageValue = (event) => {
//         setproduct_imageValue(event.target.value);
//     }
//     const [category_id, setcategory_idValue]=useState(0)
//     const onChangecategory_idValue = (event) => {
//         // setcategory_idValue(event.target.value);
//         // console.log(onChangecategory_idValue)
//         const value = event.target.value;
//         setcategory_idValue(value);
//     }
//     const [category_name, setcategory_nameValue]=useState("")
//     const onChangecategory_nameValue = (event) => {
//         setcategory_nameValue(event.target.value);

//     }


//     const [categories, setcategories] = useState([]);

//     useEffect(() => {

//         var requestOptions = {
//             method: 'GET',
//             redirect: 'follow'
//           };
//           fetch("http://localhost:8082/show_category",requestOptions)
//           .then(
//             res => res.json()
//         )
//         .then(
//             res => {
//                 console.log(res)
//                 {
//                     setcategories(res)
//                     console.log("categories");
//                     console.log(categories);
//                     // setcategory_idValue({ category_id: res[0] })

//                 }                

//             }
//         );
//     }, []);



//   return (
//     <div>

//             <h1>Add Product Info.</h1>

//              <div className='row'>

//                 <div className='col-lg-4' />

//                  <div className='col-lg-4'>


//                      <div className='mb-3 mt-3'>
//                          <label htmlFor='product_name' className="form-label">Product Name: </label>
//                          <input id='product_name' value={product_name} onChange={onChangeproduct_nameValue} className="form-control" type='text' name="product_name" />
//                      </div>
//                     <div className='mb-3 mt-3'>
//                          <label htmlFor='product_price' className="form-label">Product Price: </label>
//                          <input id='product_price' value={product_price} onChange={onChangeproduct_priceValue} type='number' className="form-control"  name="product_price" />
//                      </div>
//                      <div className="mb-3 mt-3">
//                         <label for="discount" className="form-label">Discount:</label>
//                         <input type="number" value={discount} onChange={onChangediscount} className="form-control" id="discount" placeholder="Enter discount value" name="discount" />
//                     </div>
//                      <div className='mb-3 mt-3'>
//                          <label htmlFor='product_quentity' className="form-label">Product Quentity: </label>
//                          <input id='product_quentity' value={quantity} onChange={onChangeQuantityValue} type='number' className="form-control"  name="product_quentity" />
//                      </div>
//                      <div className='mb-3 mt-3'>
//                          <label htmlFor='product_description' className="form-label">Product Description: </label>
//                          <input id='product_description' value={product_description} onChange={onChangeproduct_descriptionValue} className="form-control" type='text'  name="product_description" />
//                      </div>
//                      <div className="mb-3 mt-3">
//                          <label htmlFor="product_image" className="form-label">Product Image:</label>
//                          <input type="text" value={product_image} onChange={onChangeproduct_imageValue} className="form-control" id="product_image" placeholder="Enter Product Image" name="product_image" />
//                      </div>

//                      <div className="mb-3 mt-3">
//                      <label htmlFor="category_name" className="form-label">Category Name:</label>

//                          <select className="form-select" value={category_id} onChange={onChangecategory_idValue}
//                               type="text">

//                                                     {
//                             categories.map(
//                                 (option) => 
//                                     <option value={option.category_id}>{option.category_name}</option>

//                                 )
//                         }


//                          </select>
//                      </div>


//                      <button className='btn btn-secondary' onClick={addproduct}>Add Product</button>

//                  </div>

//              </div>

//          </div>

//     )


// }




import React, { Component } from 'react'
import Category from './Category'

class AddProduct extends Component {
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

            categories: [],
            category: 0,
            category_id: 0,
            category_name: "",
            discount: 0,
            final_price: 0



        }

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
    updateProductDiscount = (event) => {
        let products = event.target.value
        const updatedValue = { discount: products }
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
        let finalprice = this.state.product_price - (this.state.product_price * this.state.discount / 100);

        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                product_name: this.state.product_name,
                product_price: this.state.product_price,
                quantity: this.state.quantity,
                product_description: this.state.product_description,
                product_image: this.state.product_image,
                category_id: this.state.category_id,
                discount: this.state.discount,
                final_price:finalprice



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


    render() {
        let flag = true;

        let sw;
        sw = <div>
            <h1>Add Product Info.</h1>

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
                        <label htmlFor='discount' className="form-label">Product Discount: </label>
                        <input id='discount' type='number' className="form-control" value={this.state.discount} onChange={this.updateProductDiscount} name="discount" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='product_quentity' className="form-label">Avalable Product Stock: </label>
                        <input id='product_quentity' type='number' className="form-control" onChange={this.updateProductquantity} name="product_quentity" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='product_quentity' className="form-label">Mini Product Stock: </label>
                        <input id='product_quentity' type='number' className="form-control" onChange={this.updateProductquantity} name="product_quentity" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='product_description' className="form-label">Product Description: </label>
                        <textarea id='product_description' className="form-control" type='text' value={this.state.product_description} onChange={this.updateProductDescription} name="product_description" />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="product_image" className="form-label">Product Image:</label>
                        <input type="text" value={this.state.product_image} onChange={this.updateImage} className="form-control" id="product_image" placeholder="Enter Product Image" name="product_image" />
                    </div>
                    <div className="mb-3 mt-3">
                        <select className="form-select" value={this.state.category_id}
                            onChange={this.ChangeCategory} type="text">
                            {this.state.categories.map((option) => (
                                <option value={option.category_id}>{option.category_name}</option>
                            ))}

                        </select>
                    </div>


                    <button className='btn btn-secondary' onClick={this.addProduct}>Add Product</button>

                </div>

            </div>







        </div>

        return (sw
        )
    }
}

export default AddProduct
