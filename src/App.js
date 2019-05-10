import React , { Component }from 'react';
import Context from './utils/context'
import './App.css';

class App extends Component {
    render(){
        let {
            children,
            store
        } = this.props
        // children是第一层组件的实例，用于当前渲染
        console.log(children,store)
        return (
                // context的大门，与后面的consumer对应            
            <div className="App">
                <Context.Provider value={store}>
                    {children}
                </Context.Provider>     
            </div>
        )
    }
}

export default App;
