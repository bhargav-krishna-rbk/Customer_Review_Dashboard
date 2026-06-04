import React, { useState } from 'react';
import './CustomerInfo.css';
import { calculatePoints } from '../../../helpers/CalculatePoints';
import { groupTransactionsByMonth } from '../../../helpers/GroupTransactionsByMonth';
import { CUSTOMER_INFO_LABELS } from './CustomerInfo.constants';

const CustomerInfo = ({ selectedCustomer }) => {
    const [selectedMonth, setSelectedMonth] = useState(null);

    const getMonthlyAggregates = () => {
        if (!selectedCustomer?.transactions) return [];

        const monthlyGroups = groupTransactionsByMonth(selectedCustomer.transactions);
        return Object.entries(monthlyGroups).map(([monthName, transactions]) => {
            const totalAmount = transactions.reduce((sum, txn) => sum + (txn.amount || 0), 0);
            const totalPoints = transactions.reduce((sum, txn) => sum + calculatePoints(txn.amount), 0);

            return {
                monthName,
                totalAmount,
                totalPoints,
                transactionCount: transactions.length,
                transactions,
            };
        });
    };

    const monthlyData = getMonthlyAggregates();

    const handleMonthClick = (monthData) => {
        setSelectedMonth(monthData);
    };

    const closeModal = () => {
        setSelectedMonth(null);
    };

    return (
        <div className="customer-info">
            {selectedCustomer ? (
                selectedCustomer.transactions.length > 0 ? (
                    <>
                        <div className="transactions-list">
                            {monthlyData.map((monthData, index) => (
                                <div
                                    key={index}
                                    className="transaction-card clickable"
                                    onClick={() => handleMonthClick(monthData)}
                                >
                                    <p className="transaction-field"><strong>{CUSTOMER_INFO_LABELS.MONTH}:</strong> {monthData.monthName}</p>
                                    <p className="transaction-field"><strong>{CUSTOMER_INFO_LABELS.MONTHLY_AMOUNT}:</strong> ${monthData.totalAmount.toFixed(2)}</p>
                                    <p className="transaction-field"><strong>{CUSTOMER_INFO_LABELS.MONTHLY_POINTS}:</strong> {monthData.totalPoints.toFixed(2)}</p>
                                    <p className="transaction-field"><strong>{CUSTOMER_INFO_LABELS.TRANSACTIONS}:</strong> {monthData.transactionCount}</p>
                                </div>
                            ))}
                        </div>

                        {selectedMonth && (
                            <div className="modal-backdrop" onClick={closeModal}>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                    <button className="modal-close" onClick={closeModal}>×</button>
                                    <div className="modal-transactions">
                                        <div className="modal-transaction-row modal-row-header">
                                            <span>{CUSTOMER_INFO_LABELS.TRANSACTION_HEADER}</span>
                                            <span>{CUSTOMER_INFO_LABELS.AMOUNT_HEADER}</span>
                                            <span>{CUSTOMER_INFO_LABELS.DATE_HEADER}</span>
                                            <span>{CUSTOMER_INFO_LABELS.POINTS_HEADER}</span>
                                        </div>
                                        {selectedMonth.transactions
                                            .slice()
                                            .sort((a, b) => a.transactionId.localeCompare(b.transactionId))
                                            .map((txn) => (
                                                <div key={txn.transactionId} className="modal-transaction-row">
                                                    <span>{txn.transactionId}</span>
                                                    <span>${txn.amount.toFixed(2)}</span>
                                                    <span>{txn.date}</span>
                                                    <span>{calculatePoints(txn.amount).toFixed(2)}</span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <p className="text-field">{CUSTOMER_INFO_LABELS.NO_TRANSACTIONS}</p>
                )
            ) : (
                <p className="text-field">{CUSTOMER_INFO_LABELS.SELECT_CUSTOMER}</p>
            )}
        </div>
    );
};

export default CustomerInfo;