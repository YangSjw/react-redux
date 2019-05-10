import React , {Component} from 'react'

class Child extends Component {
    constructor(props){
        super(props)
        this.state = {
            context:props.context
        }
    }
    componentWillMount(){
        // console.log(this.state)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.context !== this.state.context){
            this.setState({
                context:nextProps.context
            })
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps.context,nextState)
        console.log(this.props,this.state)
        return true
    }
    render(){
        return (
            <div>
                {this.state.context}
            </div>
        )
    }
}

export default Child