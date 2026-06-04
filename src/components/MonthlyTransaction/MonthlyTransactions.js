import React, { useState, useEffect } from 'react';
import './MonthlyTransactions.css';
import DropDown from '../Common/DropDown';
import CustomerInfo from './CustomerInfo/CustomerInfo';
import { MONTHLY_TRANSACTIONS_LABELS } from './MonthlyTransactions.constants';

const MonthlyTransactions = ({CustomerData}) => {
    const [selectedId, setSelectedId] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    useEffect(() => {
        if (!selectedId) {
            setSelectedCustomer(null);
            return;
        }
        const customer = CustomerData.find((c) => c.customerId === selectedId);
        setSelectedCustomer(customer || null);
    }, [selectedId,selectedCustomer]);

    const handleChange = (e) => {
        setSelectedId(e.target.value);
    }

    return (
        <div className="monthly-transactions-container">
            <div className="dropdown-section">
                <DropDown
                    customerData={CustomerData}
                    label={MONTHLY_TRANSACTIONS_LABELS.SELECT_CUSTOMER}
                    value={selectedId}
                    onChange={handleChange}
                />
            </div>
               
            <div className="customer-info">
                 {MONTHLY_TRANSACTIONS_LABELS.MONTHLY_BREAKDOWN}: {selectedCustomer?.customerId || MONTHLY_TRANSACTIONS_LABELS.NONE}
                 <CustomerInfo selectedCustomer={selectedCustomer} />
            </div>
           
        </div>
    );
};
export default MonthlyTransactions;