import React , {Component} from 'react'
import Context from './context'

const connect = (getStore) => {
    return (WrapComponent) => {
        return class extends Component{
            render(){
                // console.log(getStore)
                // 可复用的接收部分，WrapComponent接收的是每一级子组件
                return <Context.Consumer>
                    {
                        //this.props可以接收到普通的组件传参，value接受的是connect中的第一个回调返回的值
                        (value) => {
                            let data = getStore(value)
                            console.log(data)
                            // 调用接收到的组件渲染页面
                            return <WrapComponent {...data} {...this.props}></WrapComponent>
                        }
                    }
                </Context.Consumer>
            }
        }
    }
}
export default connect