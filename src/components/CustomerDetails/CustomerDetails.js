import React, { useState, useEffect } from 'react';
import './CustomerDetails.css';
import MainCard from '../Common/MainCard';
import MonthlyTransactions from '../MonthlyTransaction/MonthlyTransactions';

const CustomerDetails = () => {

    const [customerData, setCustomerData] = useState([]);

    const fetchData = async () => {
        const response = await fetch('/customer_transactions.json');
        if (!response.ok) throw new Error('Failed to load data');
        return response.json();
};

    const getData = async () => {
        try {
            const result = await fetchData();
            setCustomerData(result);
            } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
       getData();
    }, []);

    return(
        <> 
        <div className="customer-details-container">    
            <MainCard CustomerData={customerData}/>
      </div>
      <div className="customer-details-chart">
                 <MonthlyTransactions CustomerData={customerData}/>
            </div>
        </>
    )
};

export default CustomerDetails;