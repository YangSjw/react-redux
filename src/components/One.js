import React , {Component} from 'react'
import Two from './Two'
import Connect from '../utils/connect'

class One extends Component {
    render(){
        let name = this.props.value.name
        return (
            <div>
                this is {name}
                <Two></Two>
            </div>
        )
    }
}
export default Connect(
    (value) => {
        return value.OneReducer
    }
)(One)