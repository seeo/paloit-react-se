import React, { Component } from 'react'

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
    render() {
        return (
            <div>
                <h3>Your order:</h3>
                <form>
                    Last name:
                    <input type="text" value={this.state.lastName} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default OrderForm;
