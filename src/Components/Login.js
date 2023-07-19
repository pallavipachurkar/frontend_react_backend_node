import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductComponent from './AddProduct';

class Login extends React.Component {
    constructor(props) {
        // It will call constructor method in Parent Class
        super(props);
        this.state = {
            // brand: "Ford",
            // model: "Mustang",
            // color: "red",
            // year: 45445,
            // counter: 0,
            // text: "Dummy Text",
            // testArray: [1, 2, 3, 4, 5],
            usersData: { "data": [] },
            loggedIn: false,
            username: "",
            password: "",
            error: ""

        };
        // let sw = [1, 2, 3, 4, 5];
        // sw.map((a) => (console.log(a)));

    }


    login = () => {

        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                email: this.state.username,
                password: this.state.password,
                // expiresInMins: 60, // optional

            })
        };

        fetch('http://localhost:8082/login', postData)
            .then(
                res => res.json()
            )
            .then(
                res => {
                    console.log(res)
                    if (res.success) {
                        this.setState({ loggedIn: true });
                        this.setState({ username: res.user_details.first_name });
                        window.location.href="product_list";
                        localStorage.setItem('user_id', res.user_details[0].id);
                        alert('login success')

                       
                        // localStorage.setItem("username", "p@gmail.com");
                        // document.getElementById("username").innerHTML = localStorage.getItem("username");


                    }
                    else {
                        this.setState({ loggedIn: false });
                        this.setState({ error: "Wrong credentials" });
                        // window.location.href="NoPage";


                    }
                }
            );

    }

    updateUserName = (event) => {
        let sw = event.target.value;
        const updatedValue = { username: sw };
        this.setState(updatedValue);
    }

    updatePassword = (event) => {
        let sw = event.target.value;
        const updatedValue = { password: sw };
        this.setState(updatedValue);
    }
    goToSignUpPage=()=>{
        window.location.href ='signup_user'
    }


    render() {
        let flag = true;
        let sw;
        if (!this.state.loggedIn) {
            sw = <div>
                <div className='row align-items-center'>
                    <div className="col-lg-4"></div>

                    <div class="col-lg-4 mt-5">
                    <h1> Please Login</h1>

                        <div className='mb-3 mt-3'>
                            <label htmlFor="username" className="form-label">Username:</label>
                            <input id="username" className="form-control" type="text" placeholder='email' value={this.state.username} onChange={this.updateUserName} />
                        </div>
                        <div className='mb-3 mt-3'>

                            <label htmlFor="pass" className="form-label">Password:</label>
                            <input id="pass" className="form-control" type="text" placeholder='password' value={this.state.password} onChange={this.updatePassword} />
                        </div>
                        <h1> {this.state.error} </h1>

                            <button onClick={this.login} className="btn btn-primary"> Login</button><br></br>
                            <button className='btn btn-primary mt-3' onClick={this.goToSignUpPage} >Sign Up</button>
                      
                    </div>  

                </div>


            </div>;
        }
      
        return (sw);
    }
}

export default Login;
