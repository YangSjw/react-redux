import React , { Component }from 'react';
import Context from './utils/context'
import './App.css';

class App extends Component {
    render(){
        let {
            children,
            store
        } = this.props
        console.log(children,store)
        return (
            <div className="App">
                <Context.Provider value={store}>
                    {children}
                </Context.Provider>     
            </div>
        )
    }
}

export default App;
