
// import React, { Component } from 'react'


// class BusinessDetails extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             users: [],
//             first_name: "",
//             last_name: "",
//             email: "",
//             password: "",
//             confirm_password: "",
//             phone_no: "",


//         }
//     }


//     updateFirstName = (event) => {
//         let users = event.target.value
//         const updatedValue = { first_name: users }
//         this.setState(updatedValue)

//     }
//     updateLastName = (event) => {
//         let users = event.target.value
//         const updatedValue = { last_name: users }
//         this.setState(updatedValue)

//     }
//     updateEmail = (event) => {
//         let users = event.target.value
//         const updatedValue = { email: users }
//         this.setState(updatedValue)

//     }
//     updatePassword = (event) => {
//         let users = event.target.value
//         const updatedValue = { password: users }
//         this.setState(updatedValue)

//     }
//     // Updateconfirm_password = (event) => {
//     //     let users = event.target.value
//     //     const updatedValue = { confirm_password: users }
//     //     this.setState(updatedValue)
//     // }

//     updatePhoneNumber = (event) => {
//         let users = event.target.value
//         const updatedValue = { phone_no: users }
//         this.setState(updatedValue)

//     }


//     addBusinessUser = () => {
//         let users = this.state.users
//         users.push(this.state.first_name)
//         users.push(this.state.last_name)
//         users.push(this.state.email)
//         if (this.state.password == this.state.confirm_password) {
//             users.push(this.state.password)
//             alert('ok')
//         }
//         else {
//             alert("please re-enter the correct password");
//             return;
//         }

//         users.push(this.state.confirm_password)

//         users.push(this.state.mobile_number)
//         const updatedValue = { users: users }
//         this.setState(updatedValue)
//         console.log('this.state.users')
//         console.log(this.state.users)
//         window.location.href = "login";
//         alert('signup done')

//         let postData = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({

//                 first_name: this.state.first_name,
//                 last_name: this.state.last_name,
//                 email: this.state.email,
//                 password: this.state.password,
//                 confirm_password: this.state.confirm_password,

//                 phone_no: this.state.phone_no,

//             })
//         };

//         fetch('http://localhost:8082/business_signup_user', postData)
//         console.log(postData)
//             .then(
//                 res => res.json()
//             )
//             .then(
//                 res => {
//                     console.log(res)
//                     if (res.success) {

//                     }

//                 }

//             );

//     }
//     deleteUser = (event) => {
//         let index = event.target.value;
//         console.log("index");
//         console.log(index);
//     }
//     // onImageChange=(event)=>{
//     //     console.log('event.target.files');
//     //     console.log(event.target.files);
//     //     if(event.target.files && event.target.files[0]){
//     //         let img = event.target.files[0]
//     //         this.setState({
//     //             selectedFile:event.target.files[0],
//     //             selectedFileName:event.target.files[0].name

//     //         })
//     //         console.log("this.state.image")
//     //         console.log(this.state.img)
//     //     }
//     // }
//     // updateImage = (event) => {     

//     //     let sw = event.target.value;
//     //     const updatedValue = { product_image: sw };
//     //     this.setState(updatedValue);
//     // }
//     render() {

//         let flag = true;
//         let sw;
//         sw = <div>
//             <h1>Business Details</h1>

//             <div className='container row'>

//                 <div className='col-lg-4'>

//                     <div className='mb-3 mt-3'>
//                         <label htmlFor='first_name' className="form-label">First Name: </label>
//                         <input id='first_name' className="form-control" placeholder='Enter First Name' type='text' value={this.state.first_name} onChange={this.updateFirstName} name="first_name" />
//                     </div>
//                     <div className='mb-3 mt-3'>
//                         <label htmlFor='last_name' className="form-label">Last Name: </label>
//                         <input id='last_name' className="form-control" placeholder='Enter Last Name' type='text' value={this.state.last_name} onChange={this.updateLastName} name="last_name" />
//                     </div>
//                     <div className='mb-3 mt-3'>
//                         <label htmlFor='email' className="form-label">Email: </label>
//                         <input id='email' type='text' className="form-control" placeholder='Enter Email' value={this.state.email} onChange={this.updateEmail} name="email" />
//                     </div>
//                     <div className='mb-3 mt-3'>
//                         <label htmlFor="password" className="form-label">Password:</label>
//                         <input id="password" className="form-control" type="text" placeholder='Enter Password' value={this.state.password} onChange={this.updatePassword} name="password" />
//                     </div>
//                     <div className='mb-3 mt-3'>
//                         <label htmlFor="password" className="form-label">Confirm Password:</label>
//                         <input id="password" className="form-control" type="text" placeholder='Confirm Password' value={this.state.confirm_password} onChange={this.Updateconfirm_password} name="password" />
//                     </div>
//                     <div className='mb-3 mt-3'>
//                         <label htmlFor='phone_no' className="form-label">Mobile Number: </label>
//                         <input id='phone_no' className="form-control" placeholder='Enter Mobile Number' type='text' value={this.state.phone_no} onChange={this.updatePhoneNumber} name="phone_no" />
//                     </div>
//                     <div className='mb-3 mt-3' style={{ display: "none" }}>
//                         <label htmlFor='phone_no' className="form-label">Enter Otp: </label>
//                         <input id='phone_no' className="form-control" placeholder='OTP' type='text' value={this.state.phone_no} onChange={this.updatePhoneNumber} name="phone_no" />
//                         <div className=' mt-3'>
//                             <button className='btn btn-secondary' onClick={this.addUser} >Verify</button>
//                         </div>
//                     </div>

//                     <button className='btn btn-secondary' onClick={this.addUser} >Next</button>
//                 </div>


//                 <div className='col-lg-4'>

//                     <div className='mb-3 mt-3'>
//                         <label htmlFor='first_name' className="form-label">Company Name: </label>
//                         <input id='first_name' className="form-control" placeholder='Enter Company Name' type='text' value={this.state.first_name} onChange={this.updateFirstName} name="first_name" />
//                     </div>
//                     <div className='mb-3 mt-3'>
//                         <label htmlFor="address" className="form-label">Address:</label>
//                         <input id="address" className="form-control" type="text" placeholder='address' value={this.state.address} onChange={this.updateAddress} name="address" />

//                     </div>
//                     <div className='mb-3 mt-3'>
//                         <label htmlFor="address" className="form-label">City:</label>
//                         <input id="city" className="form-control" type="text" placeholder='city' value={this.state.address} onChange={this.updateAddress} name="city" />

//                     </div>
//                     <div className='mb-3 mt-3'>
//                         <label htmlFor="pincode" className="form-label">Pincode:</label>
//                         <input id="pincode" className="form-control" type="text" placeholder='pincode' value={this.state.pincode} onChange={this.updatePincode} name="pincode" />

//                     </div>
//                     <div className='mb-3 mt-3'>
//                         <label htmlFor='phone_no' className="form-label">Business Phone: </label>
//                         <input id='phone_no' className="form-control" placeholder='Enter Mobile Number' type='text' value={this.state.phone_no} onChange={this.updatePhoneNumber} name="phone_no" />
//                     </div>
//                     {/* <div className='mb-3 mt-3'>
//                         <label htmlFor='email' className="form-label">Delivery Charges: </label>
//                         <input id='delivery_charges' type='text' className="form-control" placeholder='Enter delivery charges' value={this.state.email} onChange={this.updateEmail} name="delivery_charges" />
//                     </div> */}
//                     {/* <div className='mb-3 mt-3'>
//                         <label htmlFor="password" className="form-label">Free Delivery Above:</label>
//                         <input id="password" className="form-control" type="text" value={this.state.password} onChange={this.updatePassword} name="password" />
//                     </div> */}
//                     <div className='mb-3 mt-3'>
//                         <label htmlFor="password" className="form-label">GST Number:</label>
//                         <input id="password" className="form-control" type="text" value={this.state.password} onChange={this.updatePassword} name="password" />
//                     </div>
//                     <div className='mb-3 mt-3'>
//                         <label htmlFor="password" className="form-label">Company Description:</label>
//                         <input id="password" className="form-control" type="text" placeholder='Enter Company Description' value={this.state.password} onChange={this.updatePassword} name="password" />
//                     </div>
//                     <div className='mb-3 mt-3'>
//                         <label htmlFor="img" className="form-label">Company Type:</label>
//                         <select className="form-control" name="cars" id="cars">
//                             <option value="hotel">Hotel</option>
//                             <option value="medical">Medical</option>
//                             <option value="shopstore">Shop Store</option>
//                         </select>
//                     </div>
//                     <div className='mb-3 mt-3'>
//                         <label htmlFor="password" className="form-label">Company Logo : </label>
//                         <input type="file" id="img" name="img" accept="image/*" />
//                     </div>




//                     <button className='btn btn-secondary' onClick={this.addUser} >Sign Up</button>
//                 </div>
//             </div>
//         </div>


//         return (sw)
//     }
// }

// export default BusinessDetails
