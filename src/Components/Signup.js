import React, { Component } from 'react'

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            address: "",
            mobile_number: "",
            pincode: ""


        }
    }


    updateFirstName = (event) => {
        let users = event.target.value
        const updatedValue = { first_name: users }
        this.setState(updatedValue)

    }
    updateLastName = (event) => {
        let users = event.target.value
        const updatedValue = { last_name: users }
        this.setState(updatedValue)

    }
    updateEmail = (event) => {
        let users = event.target.value
        const updatedValue = { email: users }
        this.setState(updatedValue)

    }
    updatePassword = (event) => {
        let users = event.target.value
        const updatedValue = { password: users }
        this.setState(updatedValue)

    }
    updateAddress = (event) => {
        let users = event.target.value
        const updatedValue = { address: users }
        this.setState(updatedValue)

    }
    updateMobileNumber = (event) => {
        let users = event.target.value
        const updatedValue = { mobile_number: users }
        this.setState(updatedValue)

    }
    updatePincode = (event) => {
        let users = event.target.value
        const updatedValue = { pincode: users }
        this.setState(updatedValue)

    }


    addUser = () => {
        let users = this.state.users
        users.push(this.state.first_name)
        users.push(this.state.last_name)
        users.push(this.state.email)
        users.push(this.state.password)
        users.push(this.state.address)
        users.push(this.state.mobile_number)
        users.push(this.state.pincode)
        const updatedValue = { users: users }
        this.setState(updatedValue)
        console.log('this.state.users')
        console.log(this.state.users)
        window.location.href = "login";
        alert('signup done')

        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
                address: this.state.address,
                mobile_number: this.state.mobile_number,
                pincode: this.state.pincode

            })
        };

        fetch('http://localhost:8082/signup_user', postData)
        console.log(postData)
            .then(
                res => res.json()
            )
            .then(
                res => {
                    console.log(res)

                }

            );

    }
    deleteUser = (event) => {
        let index = event.target.value;
        console.log("index");
        console.log(index);
    }
    // onImageChange=(event)=>{
    //     console.log('event.target.files');
    //     console.log(event.target.files);
    //     if(event.target.files && event.target.files[0]){
    //         let img = event.target.files[0]
    //         this.setState({
    //             selectedFile:event.target.files[0],
    //             selectedFileName:event.target.files[0].name

    //         })
    //         console.log("this.state.image")
    //         console.log(this.state.img)
    //     }
    // }
    // updateImage = (event) => {     

    //     let sw = event.target.value;
    //     const updatedValue = { product_image: sw };
    //     this.setState(updatedValue);
    // }
    render() {

        let flag = true;
        let sw;
        sw = <div>
            <h1>Signup User </h1>


            <div className='row'>

                <div className='col-lg-4' />

                <div className='col-lg-4'>

                    <div className='mb-3 mt-3'>
                        <label htmlFor='first_name' className="form-label">First Name: </label>
                        <input id='first_name' className="form-control" type='text' value={this.state.first_name} onChange={this.updateFirstName} name="first_name" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='last_name' className="form-label">Last Name: </label>
                        <input id='last_name' className="form-control" type='text' value={this.state.last_name} onChange={this.updateLastName} name="last_name" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='email' className="form-label">Email: </label>
                        <input id='email' type='text' className="form-control" value={this.state.email} onChange={this.updateEmail} name="email" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input id="password" className="form-control" type="text" placeholder='password' value={this.state.password} onChange={this.updatePassword} name="password" />
                        {/* <label htmlFor="password" className="form-label">Confirm Password:</label> */}
                        <br></br>
                        <input id="password" className="form-control" type="text" placeholder='Confirm Password' value={this.state.password} onChange={this.updatePassword} name="password" />

                    </div>



                    <div className='mb-3 mt-3'>
                        <label htmlFor='address' className="form-label">Address: </label>
                        <input id='address' type='text' className="form-control" onChange={this.updateAddress} name="address" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='mobile_number' className="form-label">Mobile Number: </label>
                        <input id='mobile_number' className="form-control" type='text' value={this.state.mobile_number} onChange={this.updateMobileNumber} name="mobile_number" />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="pincode" className="form-label">Pincode:</label>
                        <input type="text" value={this.state.pincode} onChange={this.updatePincode} className="form-control" id="pincode" placeholder="Enter pincode" name="pincode" />
                    </div>
                    <button className='btn btn-secondary' onClick={this.addUser} >Sign Up</button>
                </div>
            </div>


        </div>
        return (sw)
    }
}

export default Signup
