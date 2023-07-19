import React, { useEffect, useState } from 'react'

function BusinessUserSignup() {

    const [inputValues, setInputValue] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        phone_no: "",

        business_name: "",
        address: "",
        city: "",
        pin: "",
        business_phone: "",
        gst_number: "",
        business_description: "",
        business_type: "Hotel",
        business_logo: "",
        business_id:0


    });

    // const [first_name, setFirstname] = useState("");
    // const [last_name, setLastname] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirm_password, setConfirmPassword] = useState("");
    // const [phone_no, setPhoneNo] = useState("");



    // const handleFirstnameChange = (e) => {
    //     setFirstname(e.target.value)
    // }
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value)
    // }
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value)
    // }
    // const handleConfirmPasswordChange = (e) => {
    //     setConfirmPassword(e.target.value)
    // }
    // const handlePhoneNoChange = (e) => {
    //     setPhoneNo(e.target.value)
    // }
    // const handleSubmitButton = (e) => {
    //     e.preventDefault();
    //     setSubmitted(e.target.value)
    // }

    const addbussinessuser = async () => {
        console.log('ffffffffff')
        console.log(inputValues.first_name)
        console.log(inputValues.last_name)
        console.log(inputValues.email)
        console.log(inputValues.password)
        console.log(inputValues.confirm_password)
        console.log(inputValues.phone_no)
        console.log(inputValues.business_name)
        console.log(inputValues.address)
        console.log(inputValues.address)


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            first_name: inputValues.first_name,
            last_name: inputValues.last_name,
            email: inputValues.email,
            password: inputValues.password,
            confirm_password:inputValues.confirm_password,
            phone_no: inputValues.phone_no,
            // business_id:inputValues.business_id,

            business_name: inputValues.business_name,
            address: inputValues.address,
            city: inputValues.city,
            pin: inputValues.pin,
            business_phone: inputValues.business_phone,
            gst_number: inputValues.gst_number,
            business_description: inputValues.business_description,
            business_type: inputValues.business_type,
            business_logo: inputValues.business_logo,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8082/business_signup_user", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        alert('add business user')


    }

    return (
        <div>
            <div className='container row'>

                <div className='col-lg-4'>
                    <h1>Business User</h1>

                    <div className='mb-3 mt-3'>
                        <label htmlFor='first_name' className="form-label">First Name: </label>
                        <input id='first_name' className="form-control" value={inputValues.first_name} onChange={(e) => setInputValue({...inputValues ,first_name: e.target.value })} placeholder='Enter First Name' type='text' name="first_name" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='last_name' className="form-label">Last Name: </label>
                        <input id='last_name' className="form-control" value={inputValues.last_name} onChange={(e) => setInputValue({...inputValues , last_name: e.target.value })}
                            placeholder='Enter Last Name' type='text' name="last_name" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='email' className="form-label">Email: </label>
                        <input id='email' type='text' className="form-control" value={inputValues.email} onChange={(e) => setInputValue({...inputValues , email: e.target.value })} placeholder='Enter Email' name="email" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input id="password" className="form-control" type="text" value={inputValues.password} onChange={(e) => setInputValue({...inputValues , password: e.target.value })} placeholder='Enter Password' name="password" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor="password" className="form-label">Confirm Password:</label>
                        <input id="password" className="form-control" type="text" value={inputValues.confirm_password} onChange={(e) => setInputValue({...inputValues , confirm_password: e.target.value })} placeholder='Confirm Password' name="password" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='phone_no' className="form-label">Mobile Number: </label>
                        <input id='phone_no' className="form-control" value={inputValues.phone_no} onChange={(e) => setInputValue({...inputValues , phone_no: e.target.value })} placeholder='Enter Mobile Number' type='text' name="phone_no" />
                    </div>
                    <div className='mb-3 mt-3' style={{ display: "none" }}>
                        <label htmlFor='phone_no' className="form-label">Enter Otp: </label>
                        <input id='phone_no' className="form-control" placeholder='OTP' type='text' name="phone_no" />
                        <div className=' mt-3'>
                            <button className='btn btn-secondary' >Verify</button>
                        </div>
                    </div>
                    {/* <button className='btn btn-secondary' onClick={addbussinessuser}>Submit</button> */}

                </div>
                <div className='col-lg-4'></div>


                <div className='col-lg-4'>
                    <h1>Business Details</h1>

                    <div className='mb-3 mt-3'>
                        <label htmlFor='business_name' className="form-label">Business Name: </label>
                        <input id='business_name' className="form-control" value={inputValues.business_name} onChange={(e) => setInputValue({...inputValues , business_name: e.target.value })} placeholder='Enter Company Name' type='text' name="first_name" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor="address" className="form-label">Business Address:</label>
                        <input id="address" className="form-control" type="text" value={inputValues.address} onChange={(e) => setInputValue({...inputValues , address: e.target.value })} placeholder='address' name="address" />

                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor="address" className="form-label">Business City:</label>
                        <input id="city" className="form-control" type="text" value={inputValues.city} onChange={(e) => setInputValue({...inputValues , city: e.target.value })} placeholder='city' name="city" />

                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor="pincode" className="form-label">Pincode:</label>
                        <input id="pincode" className="form-control" type="text" value={inputValues.pin} onChange={(e) => setInputValue({...inputValues , pin: e.target.value })} placeholder='pincode' name="pincode" />

                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='phone_no' className="form-label">Business Phone: </label>
                        <input id='phone_no' className="form-control" value={inputValues.business_phone} onChange={(e) => setInputValue({...inputValues , business_phone: e.target.value })} placeholder='Enter Mobile Number' type='text' name="phone_no" />
                    </div>

                    <div className='mb-3 mt-3'>
                        <label htmlFor="password" className="form-label">GST Number:</label>
                        <input id="password" className="form-control" value={inputValues.gst_number} onChange={(e) => setInputValue({...inputValues , gst_number: e.target.value })} type="text" name="password" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor="password" className="form-label">Business Description:</label>
                        <input id="password" className="form-control" type="text" value={inputValues.business_description} onChange={(e) => setInputValue({...inputValues , business_description: e.target.value })} placeholder='Enter Company Description' name="password" />
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor="img" className="form-label">Business Type:</label>
                        <select className="form-control" name="cars" value={inputValues.business_type} onChange={(e) => setInputValue({...inputValues , business_type: e.target.value })} id="cars">
                            <option selected value="hotel">Hotel</option>
                            <option value="medical">Medical</option>
                            <option value="shopstore">Shop Store</option>
                        </select>
                    </div>
                    <div className='mb-3 mt-3'>
                        <label htmlFor="password" className="form-label">Business Logo : </label>
                        <input type="file" id="img" name="img" value={inputValues.business_logo} onChange={(e) => setInputValue({...inputValues , business_logo: e.target.value })} accept="image/*" />
                    </div>

                    <button className='btn btn-secondary' onClick={addbussinessuser}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default BusinessUserSignup
