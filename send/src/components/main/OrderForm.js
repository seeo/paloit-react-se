import React, { Component } from 'react';


export class OrderForm extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         lastName: '',
    //         firstName: '',
    //         phoneNumber: '',
    //         country: 'SG',
    //         email: '',
    //         address: '',
    //         numCopiesForOne: 0,
    //         numCopiesForTwo: 0,
    //         numCopiesForThree: 0,
    //         numCopiesForFour: 0,
    //         numCopiesForFive: 0,
    //     }
    // }
     handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Last name value: ' + this.state.lastName);


        // this.props.searchUsers(this.props.text);
        // this.setState({text: ''});
    }

    render() {
        return (
            <div>
                <h3>Your order:</h3>
                <form className = "order-form" action = '/order-summary' onSubmit = {this.handleSubmit} >
                    <div>
                        Last name:
                        <input type="text" name="lastName" className = "form-control" value={this.props.lastName} onChange={this.handleChange} />
                    </div>
                    <div>
                        First name:
                        <input type="text" name="firstName" className = "form-control" value={this.props.firstName} onChange={this.handleChange} />
                    </div>
                    <div>
                        Phone Number:
                        <input type="number" name="phoneNumber" className = "form-control" value={this.props.phoneNumber} onChange={this.handleChange} />
                    </div>
                    <div>
                        Country:
                        <div className = "form-dropdown" >
                        <select name="country" value={this.props.value} onChange={this.handleChange}>
                            <option value="SG">SG</option>
                            <option value="HK">HK</option>
                        </select>
                        </div>
                    </div>
                    <div>
                    Email:
                    <input type="email" name="email" className = "form-control" value={this.props.email} onChange={this.handleChange} />
                    </div>
                    <div>
                    Address:
                    <input type="text" name="address" className = "form-control" value={this.props.address} onChange={this.handleChange} />
                    </div>
                    <div>
                        Number of copies for #1:
                        <div className = "form-dropdown" >
                            <select name="numCopiesForOne" value={this.props.numCopiesForOne} onChange={this.handleChange}>
                                <option value = "0" > 0 </option>
                                <option value = "1" > 1 </option>
                                <option value = "2" > 2 </option>
                                <option value = "3" > 3 </option>
                                <option value = "4" > 4 </option>
                                <option value = "5" > 5 </option>
                                <option value = "6" > 6 </option>
                                <option value = "7" > 7 </option>
                                <option value = "8" > 8 </option>
                                <option value = "9" > 9 </option>
                                <option value = "10" > 10 </option>
                            </select>
                        </div>
                    </div>
                    <div>
                    Number of copies for #2:
                        <div className = "form-dropdown" >
                        <select name="numCopiesForTwo" value={this.props.numCopiesForTwo} onChange={this.handleChange}>
                            <option value = "0" > 0 </option>
                            <option value = "1" > 1 </option>
                            <option value = "2" > 2 </option>
                            <option value = "3" > 3 </option>
                            <option value = "4" > 4 </option>
                            <option value = "5" > 5 </option>
                            <option value = "6" > 6 </option>
                            <option value = "7" > 7 </option>
                            <option value = "8" > 8 </option>
                            <option value = "9" > 9 </option>
                            <option value = "10" > 10 </option>
                        </select>
                        </div>
                    </div>
                    Number of copies for #3:
                    <div className = "form-dropdown" >
                    <select  name="numCopiesForThree" value={this.props.numCopiesForThree} onChange={this.handleChange}>
                        <option value = "0" > 0 </option>
                        <option value = "1" > 1 </option>
                        <option value = "2" > 2 </option>
                        <option value = "3" > 3 </option>
                        <option value = "4" > 4 </option>
                        <option value = "5" > 5 </option>
                        <option value = "6" > 6 </option>
                        <option value = "7" > 7 </option>
                        <option value = "8" > 8 </option>
                        <option value = "9" > 9 </option>
                        <option value = "10" > 10 </option>
                    </select>
                    </div>
                    Number of copies for #4:
                    <div className = "form-dropdown" >
                    <select name="numCopiesForFour" value={this.props.numCopiesForFour} onChange={this.handleChange}>
                        <option value = "0" > 0 </option>
                        <option value = "1" > 1 </option>
                        <option value = "2" > 2 </option>
                        <option value = "3" > 3 </option>
                        <option value = "4" > 4 </option>
                        <option value = "5" > 5 </option>
                        <option value = "6" > 6 </option>
                        <option value = "7" > 7 </option>
                        <option value = "8" > 8 </option>
                        <option value = "9" > 9 </option>
                        <option value = "10" > 10 </option>
                    </select>
                    </div>
                    Number of copies for #5:
                    <div className = "form-dropdown" >
                    <select name="numCopiesForFive" value={this.props.numCopiesForFive} onChange={this.handleChange}>
                        <option value = "0" > 0 </option>
                        <option value = "1" > 1 </option>
                        <option value = "2" > 2 </option>
                        <option value = "3" > 3 </option>
                        <option value = "4" > 4 </option>
                        <option value = "5" > 5 </option>
                        <option value = "6" > 6 </option>
                        <option value = "7" > 7 </option>
                        <option value = "8" > 8 </option>
                        <option value = "9" > 9 </option>
                        <option value = "10" > 10 </option>
                    </select>
                    </div>
                    <div className = "btn-add-to-cart">
                        <input type="submit" value = "Add to cart" className = "btn btn-success" />
                    </div>
                </form>
            </div>
        )
    }
}

export default OrderForm;
