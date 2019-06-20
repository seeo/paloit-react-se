import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import OrderForm from './components/main/OrderForm';
import './App.css';

class App extends Component {
    render(){
        return (
            <div className = "App">
                <Navbar />

                    <div className = "form-container">
                        <h2>Hello PALO IT</h2>
                        <OrderForm />
                    </div>

            </div>
        );
    }
}

export default App;
