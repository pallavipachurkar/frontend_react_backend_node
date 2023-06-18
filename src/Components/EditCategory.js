import React, { Component } from 'react'

class EditCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Products: [],
            categories: [],
            category_id: 0,
            category_name: ""

        }
        
    }
    componentDidMount() {
        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        console.log(urlParams);
        const category_id = urlParams.get('category_id')
        console.log(category_id);
        this.setState({category_id:category_id});
        this.showReqCategory(category_id);
    }
    showReqCategory = (category_id) => {
        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                category_id: category_id

            })
        };
        fetch("http://localhost:8082/get_category",postData)
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    console.log(res);
                    const updatedValue = { categories: res };
                    this.setState(updatedValue);
                    //show data for update
                    this.setState({ category_name: res[0].category_name });
                    
                }
            )
    }
    updateCategoryname = (event) => {
        let category = event.target.value
        const updatedValue = { category_name: category }
        this.setState(updatedValue)
    }
    updateCategory = (e) => {
       
        let category = this.state.categories
        category.push(this.state.category_name)
        
        const updatedValue = { categories: category }
        this.setState(updatedValue)

        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                category_id: this.state.category_id,
                category_name: this.state.category_name
            })
        };

        fetch("http://localhost:8082/update_category", postData)
            .then(
                res => (res.json())
            )
            .then(
                (res) => {
                    console.log(res);
                    if (res.success) {
                        alert("Category successfully updated!!");

                    }
                    else {
                        alert("Failed to add the Category!!");
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


                </div>


                <div className='mb-3 mt-3'>
                    <label htmlFor='category_name' className="form-label">Category Name: </label>
                    <input id='category_name' className="form-control" type='text' value={this.state.category_name} onChange={this.updateCategoryname} name="category_name" placeholder={this.state.category_name}/>
                </div>
                
                <button className='btn btn-primary' onClick={this.updateCategory}>update</button>

            </div>
        </div>

        return (sw)
    }
}

export default EditCategory
