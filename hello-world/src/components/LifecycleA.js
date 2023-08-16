import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Faisal'
        }
        console.log('LifecycleA constructor')
    }

    // static getDerivedStateFromProps (props, state) {
    //     console.log('LifecycleA getDerivedStateFromProps')
    //     return null
    // }

    // componentDidMount() {
    //     console.log('LifecycleA componentDidMount')
    // }

    
    // i click on change state button then below 3 function call 
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifecycleA getSnapshotBeforeUpdate')
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Munir'
        })
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change state</button>
                {/* <LifecycleB /> */}
            </div>
        )
    }
}

export default LifecycleA