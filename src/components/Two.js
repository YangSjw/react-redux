import React , {Component} from 'react'
import Connect from '../utils/connect'

class Two extends Component {
    render(){
        let name = this.props.value.name
        return (
            <div>
                this is {name}
            </div>
        )
    }
}
export default Connect(
    (value) => {
        return value.TwoReducer
    }
)(Two)