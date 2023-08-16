import React, { Component } from 'react'
import MemoComp from './MemoComp'

export class ParentComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Vishwas'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Faisal123'
            })
        })
    }
  render() {
    console.log('*******************Partent Comp render ********************')
    return (
      <div>ParentComp
        <MemoComp name={this.state.name}/>
      </div>

    )
  }
}

export default ParentComp