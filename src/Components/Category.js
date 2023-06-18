import React, { Component } from 'react'

class Category extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Products: [],
            categories: [],
            category_id: 0,
            category_name: ""

        }
        this.showCategory();
    }
    showCategory = (event) => {
        fetch("http://localhost:8082/show_category")
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    console.log(res);
                    const updatedValue = { categories: res };
                    this.setState(updatedValue);

                }
            )




    }
    updateCategoryname = (event) => {
        let category = event.target.value
        const updatedValue = { category_name: category }
        this.setState(updatedValue)
    }
    addCategory = () => {
        let category = this.state.categories
        category.push(this.state.category_name)
        const updatedValue = ({ categories: category })
        this.setState(updatedValue)

        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                category_name: this.state.category_name

            })
        };

        fetch('http://localhost:8082/add_category', postData)
        console.log(postData)
            .then(
                res => res.json()
            )
            .then(
                res => {
                    console.log(res)
                    if (res.success) {
                        alert("category successfully added!!")
                    }
                    else {
                        alert("Failed to add the category!!")
                    }

                }
            );
    }
  
    deleteCategory = (event) => {

        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                category_id: event.target.value
            })
        };

        fetch("http://localhost:8082/delete_category", postData)
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    console.log(res);
                    if (res.success) {

                        this.showCategory();
                        // this.addCart();
                    }
                }
            )
    }
    UpdatedeleteCategory = (event) => {
        let sw = event.target.value;
        console.Console.log(sw)
        const updatedValue = { deleteCategory: sw };

        this.setState(updatedValue);
        // window.location.reload(true);

    }

    gotoproductCategory = (event) => {
        window.location.href = "category_name?category_id=" + event.target.value;
        console.log(window.location.href)

    }


    render() {
        let sw = <div>
            <div className='container border border-gray p-3'>
                <div className='col-lg-4' />
                <div className='col-lg-4'>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='category_name' className="form-label">Add Category Name: </label>
                        <input id='category_name' className="form-control" type='text' value={this.state.category_name} onChange={this.updateCategoryname} name="category_name" />

                    </div>
                    <button className='btn btn-secondary' onClick={this.addCategory}>Add Category</button>

                </div>
            </div>

            <div className="container border border-gray p-3 mt-5 ">
                <table className="table p-3">
                    <thead style={{ backgroundColor: "gray" }}>
                        <tr className='p-3'>
                            <th scope="col">#</th>
                            <th style={{ textAlign: "center" }} scope="col">Category Name</th>
                            <th style={{ textAlign: "center" }} scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        this.state.categories.map((category, i) => (
                            <tbody>
                                <tr>
                                    <td>{category.category_id}</td>
                                    <td style={{ textAlign: "center" }}>{category.category_name}</td>
                                    <td style={{ textAlign: "center" }}><button className='btn btn-secondary p-3 m-3' value={category.category_id} onClick={this.gotoproductCategory}>Edit</button>
                                        <button className='btn btn-secondary p-3 m-3' value={category.category_id} onChange={this.UpdatedeleteCategory} onClick={this.deleteCategory}>Delete</button>
                                   </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>

           

        </div>





        return (
            sw
        )
    }
}

export default Category
