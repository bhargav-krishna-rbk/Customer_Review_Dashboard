import React, {useState,useEffect} from 'react';
import './MainCard.css';
import { TotalTransactions } from '../../helpers/TotalTransactions';
import { TotalAmount } from '../../helpers/TotalAmount';
import { TotalCredits } from '../../helpers/TotalCredits';
import { MAIN_CARD_LABELS } from './MainCard.constants';

const MainCard = ({CustomerData}) => {

    const [TotalUsers, setTotalUsers] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalTransactions, setTotalTransactions] = useState(0);
    const [totalCredits, setTotalCredits] = useState(0);

    
    useEffect(() => {
        setTotalUsers(CustomerData.length);
        setTotalTransactions(TotalTransactions(CustomerData));
        setTotalAmount(TotalAmount(CustomerData));
        setTotalCredits(TotalCredits(CustomerData));
    }, [CustomerData]);

    
  return (
    <div className="main-card"> 
        <div className="main-card-title">{MAIN_CARD_LABELS.TOTAL_USERS} : {TotalUsers}</div>
        <div className="main-card-title">{MAIN_CARD_LABELS.TOTAL_TRANSACTIONS} : {totalTransactions}</div>
        <div className="main-card-title">{MAIN_CARD_LABELS.AMOUNT} : ${totalAmount.toFixed(2)}</div>
        <div className="main-card-title">{MAIN_CARD_LABELS.TOTAL_CREDITS} : {totalCredits.toFixed(2)}</div>
    </div>
  );
}

export default MainCard;