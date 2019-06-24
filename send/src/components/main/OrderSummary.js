import React, { Component } from 'react'

export class OrderSummary extends Component {
    render() {
        return (
            <div>
                <h3>Summary of your order:</h3>
                <div>
                    Last name:
                    <p type="text" name="lastName" value={this.props.lastName} />
                </div>
            </div>
        )
    }
}

export default OrderSummary
