import React , {Component} from 'react'
import Child from './child'

class Father extends Component {
    constructor(props){
        super(props)
        this.state = {
            context:'臭狗子'
        }
    }
    render(){
        return (
            <div>
                <Child context={this.state.context}></Child>
            </div>
        )
    }
    componentDidMount(){
        console.log(this)
        setTimeout(() => {
            this.setState({
                context:'热死了'
            })
            console.log(this.state)
        },3000)
    }
}
export default Father