import React , {Component} from 'react'
import Context from './context'

const connect = (getStore) => {
    return (WrapComponent) => {
        return class extends Component{
            render(){
                console.log(getStore)
                return <Context.Consumer>
                    {
                        (value) => {
                            let data = getStore(value)
                            return <WrapComponent value={data}></WrapComponent>
                        }
                    }
                </Context.Consumer>
            }
        }
    }
}
export default connect