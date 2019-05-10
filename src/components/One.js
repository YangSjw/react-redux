import React , {Component} from 'react'
import Two from './Two'
import Connect from '../utils/connect'

class One extends Component {
    render(){
        let {
            name,
            sex
        } = this.props

        console.log(name)
        return (
            <div>
                this is {name} {sex}
                <Two></Two>
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
)(One)