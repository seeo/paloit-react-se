import React, { Component } from 'react';


export class OrderForm extends Component {
    constructor(props) {
        super(props)
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
     handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <div>
                <h3>Your order:</h3>
                <form className = "order-form" onSubmit = {this.handleSubmit} >
                    <div>
                        Last name:
                        <input type="text" name="lastName" className = "form-control" value={this.state.lastName} onChange={this.handleChange} />
                    </div>
                    <div>
                        First name:
                        <input type="text" name="firstName" className = "form-control" value={this.state.firstName} onChange={this.handleChange} />
                    </div>
                    <div>
                        Phone Number:
                        <input type="number" name="phoneNumber" className = "form-control" value={this.state.phoneNumber} onChange={this.handleChange} />
                    </div>
                    <div>
                        Country:
                        <div className = "form-dropdown" >
                        <select name="country" value={this.state.value} onChange={this.handleChange}>
                            <option value="SG">SG</option>
                            <option value="HK">HK</option>
                        </select>
                        </div>
                    </div>
                    <div>
                    Email:
                    <input type="email" name="email" className = "form-control" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div>
                    Address:
                    <input type="text" name="address" className = "form-control" value={this.state.address} onChange={this.handleChange} />
                    </div>
                    <div>
                        Number of copies for #1:
                        <div className = "form-dropdown" >
                            <select name="numCopiesForOne" value={this.state.numCopiesForOne} onChange={this.handleChange}>
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
                        <select name="numCopiesForTwo" value={this.state.numCopiesForTwo} onChange={this.handleChange}>
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
                    <select  name="numCopiesForThree" value={this.state.numCopiesForThree} onChange={this.handleChange}>
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
                    <select name="numCopiesForFour" value={this.state.numCopiesForFour} onChange={this.handleChange}>
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
                    <select name="numCopiesForFive" value={this.state.numCopiesForFive} onChange={this.handleChange}>
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

// const quantity = [
//     {label: '1', value: 1},
//     {label: '2', value: 2},
//     {label: '3', value: 3},
//     {label: '4', value: 4},
//     {label: '5', value: 5},
//     {label: '6', value: 6},
//     {label: '7', value: 7},
//     {label: '8', value: 8},
//     {label: '9', value: 9},
//     {label: '10', value: 10},
// ];



OrderForm.propTypes = {
    // lastName: PropTypes.string.isRequired,
    // firstName: PropTypes.string.isRequired,
    // phoneNumber: PropTypes.string.isRequired,
    // country: PropTypes.string.isRequired,
    // email: PropTypes.string.isRequired,
    // address: PropTypes.string.isRequired,
    // numCopiesForOne: PropTypes.number.isRequired,
    // numCopiesForTwo: PropTypes.number.isRequired,
    // numCopiesForThree: PropTypes.number.isRequired,
    // numCopiesForFour: PropTypes.number.isRequired,
    // numCopiesForFive: PropTypes.number.isRequired,
}

export default OrderForm;
