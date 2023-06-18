import React, { Component } from 'react'

class Logout extends Component {
    constructor(props) {
        super(props);
        // To clear a specific item
        localStorage.removeItem('user_id');
        window.location.href = "login";
    }

}

export default Logout
