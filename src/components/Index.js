import React , {Component} from 'react'
import Connect from '../utils/connect'
import One from './One'
// import Context from '../utils/context'

class Index extends Component {
    render(){
        // let name = this.props.value.name
        let {
            name
        } = this.props
        console.log(name)
        return (
                <div>
                    this is {name}
                    <One sex={'男'}></One>
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
)(Index)