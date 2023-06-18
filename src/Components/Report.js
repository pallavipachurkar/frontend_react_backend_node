import React, { Component } from 'react'

class Report extends Component {
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
            final_price: 0,

            reports: [],
            orders: [],
            order_id: 0,
            user_id: 0,

            Name: "",
            startDate: "",
            endDate: ""
        }
        this.render();

    }
    updateStartDate = (event) => {
        let sw = event.target.value
        const updatedValue = { startDate: sw }
        this.setState(updatedValue)
        console.log(updatedValue)

    }
    updateEndDate = (event) => {
        let sw = event.target.value
        const updatedValue = { endDate: sw }
        this.setState(updatedValue)
        console.log(updatedValue)

    }
    updateName = (event) => {
        let sw = event.target.value
        const updatedValue = { Name: sw }
        this.setState(updatedValue)
        console.log(updatedValue)

    }

    report = (event) => {

        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                start_date: this.state.startDate,
                end_date: this.state.endDate,
                user_id: localStorage.getItem("user_id"),

            })
        };
        this.render();

        fetch('http://localhost:8082/report', postData)
            .then(
                res => res.json()
            )
            .then(
                res => {
                    console.log(res)
                    const updatedValue = { orders: res }
                    this.setState(updatedValue)

                }
            );

    }

    ChangeOrderStatus = (event) => {
        // console.log("this.state.products");
        // console.log(this.state.products);
        
        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                order_status: event.target.value,
                order_id: event.target.getAttribute('order_id')
                
            })
        };

        fetch("http://localhost:8081/order_status", postData)
        .then(
            res => (res.json())
        )
        .then(
            (res) => {

                console.log(res);
               alert("order status changed successfully");

                // const updatedValue = { products: res };
                // this.setState({startDate: startDate, endDate: endDate })



                // this.setState(updatedValue);



            }
        )

    }

    render() {
        let sw;

        sw = <div>
            <div className='row'>

                <div className='col-lg-4' />

                <div className='col-lg-4'>


                    <div className='mb-3 mt-3'>
                        <label htmlFor='startDate' className="form-label">Enter Start Date: </label>
                        <input id='startDate' className="form-control" type='date' value={this.state.startDate} onChange={this.updateStartDate} name="startDate" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='endDate' className="form-label">Enter End Date: </label>
                        <input id='endDate' type='date' className="form-control" value={this.state.endDate} onChange={this.updateEndDate} name="endDate" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='name' className="form-label">Enter Customer Name /Number: </label>
                        <input id='name' type='text' className="form-control" value={this.state.Name} onChange={this.updateName} name="name" />
                    </div>



                    <button className='btn btn-secondary' onClick={this.report}>Show Report</button>

                </div>


                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">total</th>
                                <th scope="col">order status</th>
                                <th scope="col">date</th>

                            </tr>
                        </thead>

                        <tbody>
                        { this.state.orders.map((order) => (

                                    <tr>
                                        <th scope="row">{order.user_id}</th>
                                        <td>{this.state.Name}</td>
                                        <td>{order.mobile_number}</td>
                                        <td>{order.total_payable}</td>
                                        <td> <select className="form-select" value={this.state.order_status} order_id={order.order_id} onChange={this.ChangeOrderStatus} type="text">
                                        <option selected>Order State</option>
                                        <option value="pending" >pending</option>
                                        <option value="dispatched">dispatched</option>
                                        <option value="delivered">delivered</option>
                                    </select></td>
                                        <td>{order.date}</td>

                                    </tr>
                              
                                    ))
                    }
                        </tbody>
                     
                    </table>
                </div>


            </div>
        </div>
        return (sw)
    }
}

export default Report
