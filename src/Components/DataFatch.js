import React from 'react';
import ReactDOM from 'react-dom/client';

class ClassComponent extends React.Component {
    constructor(props) {
        // It will call constructor method in Parent Class
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 45445,
            counter: 0,
            text: "Dummy Text",
            testArray: [1, 2, 3, 4, 5],
            userData: { "data": [] },
            logedIn: false,
            username: "",
            password:"",
            error: ""

        };
        let sw = [1, 2, 3, 4, 5];
        sw.map((a) => (console.log(a)));
    }

    // Lifecycle method
    componentDidMount() {
        console.log("component Mount sucessfully !!");
        // alert("component Mount sucessfully !!");
    }

    componentDidUpdate() {
        console.log("The updated brand is " + this.state.brand);
    }

    static getDerivedStateFromProps(props, state) {
        console.log("before component Mount");
        return {};
    }

    shouldComponentUpdate() {
        console.log("in shouldComponentUpdate");
        return true;
    }

    changeColor = () => {
        console.log("Prev val:" + this.state.brand);

        if (this.state.brand == "Ford") {
            console.log("In If condition");
            const updatedValue = { brand: "Audi" };
            this.setState(updatedValue);
            console.log("After updating val:" + this.state.brand);
        } else {
            console.log("In else condition");
            const updatedValue = { brand: "Ford" };
            this.setState(updatedValue);
        }

    }

    upCounter = () => {
        let sw = this.state.counter;
        sw++;
        const updatedValue = { counter: sw };
        this.setState(updatedValue);
    }

    downCounter = () => {
        let sw = this.state.counter;
        sw--;
        const updatedValue = { counter: sw };
        this.setState(updatedValue);
    }

    updateLabel = (event) => {
        let sw = event.target.value;
        const updatedValue = { text: sw };
        this.setState(updatedValue);
    }


    fetchData = () => {
        fetch("https://reqres.in/api/users?page=2")
            .then((res) => (res.json()))
            .then((res) => {
                const updatedValue = { userData: res }
                this.setState(updatedValue)
            })

    }

    loggedIn = () => {
        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: this.state.username,
                password: this.state.password,
                // expiresInMins: 60, // optional
            })
        };

        fetch('/login', postData)
            .then((res) => (res.json()))
            .then((res) => {
                if (typeof res.email != 'undefined') {
                    this.setState({ logedIn: true })
                    this.setState({ username: res.firstName })
                }
                else {
                    this.setState({ logedIn: false })
                    this.setState({ error: "Wrong credentials" });

                }
            })

    }
    updateUserName=(event)=>{
        let sw = event.target.value;
        const updateValue ={username:sw}
        this.setState(updateValue)

    }
    updatePassword=(event)=>{
        let sw = event.target.value;
        const updateValue={password:sw}
        this.setState(updateValue)
        
    }

    render() {
        let sw;
        if (!this.state.logedIn) {
            sw = <div>
                <h1>Please loged in our system !!</h1>
                <label htmlFor='username'>Username: </label>
                <input id='username' type='text' value={this.state.username} onChange={this.updateUserName} />
                <label htmlFor='password'>Password: </label>
                <input id='password' type='text' value={this.state.password} onChange={this.updatePassword} />
                <h1> {this.state.error} </h1>
                <button onClick={this.loggedIn}>Log In</button>
            </div>;


        }
        else {
            sw = <div>
                <h1> You are successfully logged in our system  {this.state.username}!! </h1>

                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                </p>

                {/* TextBox Value Change */}
                <h1>Textbox Text: {this.state.text}</h1>
                <input type="text" value={this.state.text} onChange={this.updateLabel} />
                <button type="button" onClick={this.changeColor}>Change Brand</button>

                <br>
                </br>

                {/* Counter Value */}
                <h1>Counter: {this.state.counter}</h1>
                <button type="button" onClick={this.upCounter}>+</button>
                <button type="button" onClick={this.downCounter}>-</button>

                {/* Print Map Function */}
                <h1>Map Example</h1>
                {
                    this.state.testArray.map(
                        (a) => (<li>{a}</li>)
                    )
                }
                {/* fetch data */}
                <button type='button' onClick={this.fetchData}>Fetch data</button>
                {this.state.userData.data.map((user) => (<li>{user.email}</li>))}


            </div>;

        }

        // let flag = false
        // if (typeof this.state.userData.data != 'undefined') {
        //     flag = true
        // }


        return (sw);
    }
}


export default ClassComponent;
