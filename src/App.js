import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import OrderForm from './components/main/OrderForm';
import './App.css';

class App extends Component {
    render(){
        return (
            <div className = "App">
                <Navbar />
                    <div className = "background-container">
                        <div className = "form-container">
                            <OrderForm />
                        </div>
                    </div>
            </div>
        );
    }
}

export default App;
