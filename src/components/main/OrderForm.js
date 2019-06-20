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
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default OrderForm;
