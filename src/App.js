import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
    render(){
        return (
            <div className = "App">
                <Navbar />
                <div className = "container">
                    <h2>
                    Hello PALO IT
                    </h2>
                </div>
            </div>
        );
    }
}

export default App;
