import React , {Component} from 'react'
import Connect from '../utils/connect'

class Two extends Component {
    render(){
        let {
            name
        } = this.props
        return (
            <div>
                this is {name}
            </div>
        )
    }
}
export default Connect(
    (value) => {
        // 返回对象形式，方便解构和组件普通传值的获取
        return {
            name:value.IndexReducer.name
        }
    }
)(Two)