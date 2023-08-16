import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Hello'
        }
    }

    clilckHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clilckHandler}>Click</button>
        {/* <button onClick={this.clilckHandler}>Click</button> */}
      </div>
    )
  }
}

export default EventBind