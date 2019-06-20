import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

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

    render() {
        return (
            <div>
                <h3>Your order:</h3>
                <form className = "order-form">
                    Last name:
                    <input type="text" name="lastName" className = "form-control" value={this.state.lastName} onChange={this.handleChange} />
                    First name:
                    <input type="text" name="firstName" className = "form-control" value={this.state.firstName} onChange={this.handleChange} />
                    Phone Number:
                    <input type="text" name="phoneNumber" className = "form-control" value={this.state.phoneNumber} onChange={this.handleChange} />
                    Country:
                    <Select options = {countryList} name="country" className = "form-control" value={this.state.country} onChange={this.handleChange} />
                    Email:
                    <input type="email" name="email" className = "form-control" value={this.state.email} onChange={this.handleChange} />

                </form>
            </div>
        )
    }
}

const countryList = [
    {label: "SG", value: 1},
    {label: "HK", value: 2},
]

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
