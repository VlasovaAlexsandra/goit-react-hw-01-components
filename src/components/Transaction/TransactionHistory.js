import React from 'react';
import PropTypes from 'prop-types';
import './Transaction.css'

const TransactionHistory = ({ items }) => (
    <table className="transaction-history">
        <thead>
            <tr className="title-label">
                <th className="th-label">Type</th>
                <th className="th-label">Amount</th>
                <th className="th-label">Currency</th>
            </tr>
        </thead>

        <tbody className="transactions">
            {items.map(({ id, type, amount, currency }) => (
                <tr className="colum" key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            )
            )}
                     
        </tbody>
    </table>
)

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionHistory;