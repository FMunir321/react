import React, { Component } from "react";

class Welcome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h1>class Component</h1>
            </div>
        )
    }
}

export default Welcome;