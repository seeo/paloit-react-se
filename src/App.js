import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import OrderForm from './components/main/OrderForm';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
         this.state = {
             lastName: '',
             firstName: '',
             phoneNumber: '',
             country: 'SG',
             email: '',
             address: '',
             numCopiesForOne: 0,
             numCopiesForTwo: 0,
             numCopiesForThree: 0,
             numCopiesForFour: 0,
             numCopiesForFive: 0,
         }
    }
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
