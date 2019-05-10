import React , {Component} from 'react'
import Connect from '../utils/connect'
import One from './One'
// import Context from '../utils/context'

class Index extends Component {
    render(){
        let name = this.props.value.name
        return (
                <div>
                    this is {name}
                    <One></One>
                </div>
        )
    }
}
export default Connect(
    (value) => {
        return value.IndexReducer
    }
)(Index)