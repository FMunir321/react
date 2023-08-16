import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'faisal',
            comments: '',
            topic:''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <lable>Username</lable>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <lable>Comments</lable>
                    <textarea type='text' value={this.state.comments} onChange={this.handleCommentsChange} />
                </div>
                <div>
                    <lable>Topic</lable>
                    <select type='text' value={this.state.topic} onChange={this.handleTopicChange} >
                        <option value="react">React</option>
                        <option value="angular">angular</option>
                        <option value="vue">vue</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default Form