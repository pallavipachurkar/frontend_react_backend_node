import React, { Component } from 'react'
import { propTypes } from 'prop-types';
import { ReactDOM } from 'react-dom';

class StatePropsValidator extends React.Component {

    render() {
        return (
            <div>
                <h1>Props Validation Example</h1>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Valid</th>
                    </tr>
                    <tr>
                        <td>Array</td>
                        <td>{this.props.propArray}</td>
                        <td>{this.props.propArray ? "true" : "False"}</td>
                    </tr>
                    <tr>
                        <td>Boolean</td>
                        <td>{this.props.propBool}</td>
                        <td>{this.props.propBool ? "true":"False"}</td>
                    </tr>
                    <tr>
                        <td>Function</td>
                        <td>{this.props.propFunc}</td>
                        <td>{this.props.propFunc ? "true":'false'};</td>
                    </tr>
                    <tr>
                        <td>String</td>
                        <td>{this.props.propString}</td>
                        <td>{this.props.propString ? "true" : "False"}</td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td>{this.props.propNumber}</td>
                        <td>{this.props.propNumber ? "true" : "False"}</td>
                    </tr>
                </table>

            </div>
        )
    }
}
// StatePropsValidator.propTypes = {
//     propArray: propTypes.array.isRequired,
//     propBool: PropTypes.bool.isRequired,  
//     propFunc: PropTypes.func,  
// }
StatePropsValidator.defaultProps = {
    propArray: [2, 6, 5, 8, 1],
    propBool: true,  
    propFunc: function(x){return( x+5)},  
    propNumber: 1,  
    propString: "JavaTpoint",  
}

export default StatePropsValidator;
