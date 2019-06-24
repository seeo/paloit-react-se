import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import OrderForm from './components/main/OrderForm';
import OrderSummary from './components/main/OrderSummary';
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
            <Router>
                <div className = "App">
                    <Navbar />
                        <div className = "background-container">
                            <div className = "form-container">
                              <Switch>
                                <Route exact path = '/' render = {props => (
                                    <Fragment>
                                        <OrderForm />
                                    </Fragment>)}
                                />
                                <Route exact path ='/order-summary' component={OrderSummary} />
                              </Switch>

                            </div>
                        </div>
                </div>
            </Router>
        );
    }
}

export default App;
