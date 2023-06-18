import React, { Component } from 'react'

class ClassComponent1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 2023,
            counter: 0,
            text: "Dummy Text",
            testArray: [1, 2, 3, 4, 5]
        }
        let sw = [1, 2, 3, 6, 5]
        sw.map((a) => (console.log(a)))
    }

    shouldComponentUpdate() {
        console.log("in shouldComponentUpdate");
        return true;
    }
    changeColor = () => {
        console.log("prev val is " + this.state.brand)

        if (this.state.brand == 'Ford') {
            const updateVal = { brand: 'Audi' }
            this.setState(updateVal)
        }
        else {
            const updateVal = { brand: 'Ford' }
            this.setState(updateVal)
        }

    }
    updateLabel = (event) => {

        let aa = event.target.value;
        const updatedValue = { text: aa }
        this.setState(updatedValue)
    }

    upCounter = () => {
        let upcon = this.state.counter;
        upcon++;
        const updatedcon = { counter: upcon }
        this.setState(updatedcon)
    }
    downCounter = () => {
        let downcon = this.state.counter;
        downcon--;
        const updatedDown = {counter:downcon}

        this.setState(updatedDown)
    }
    render() {
        const sw =
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>
                <button type="button" onClick={this.changeColor}>Change Brand</button>
                {/* map function */}
                <h1>Map Example</h1>
                {this.state.testArray.map((a) => (<li key={a}>{a}</li>))}

                {/* TextBox Value Change */}
                <h1>TextBox Text : {this.state.text}</h1>
                <input type='text' value={this.state.text} onChange={this.updateLabel} />
                {/* counterup */}
                <h1>Counter:{this.state.counter}</h1>
                <button type='button' onClick={this.upCounter}>+</button>
                <button type='button' onClick={this.downCounter}>-</button>


            </div>
        return (sw)
    }
}

export default ClassComponent1
