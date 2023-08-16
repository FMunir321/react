import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return this.state.isLoggedIn ? (
            <div>Welcome Vishwas</div>
        ) : (
            <div > Welcome Guest</div >
        )

        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Vishwas</div>
        // } else {
        //     return <div>Welcome Guest1</div>
        // }


        // return (
        //     <div>Welcome Vishwas</div>
        // )
    }
}

export default UserGreeting