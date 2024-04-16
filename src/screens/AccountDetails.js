import React from 'react';
import './AccountDetails.css';
import Navbar from './NavBar/Navbar';

function AccountDetails() {
    // Sample account details
    const accountD = JSON.parse(localStorage.getItem("accountDetails"));
    const account = {
        name: 'John Doe',
        accountName: accountD.accountName,
        balance: accountD.balance,
        accountType: accountD.accountType,
        employerName: 'ABC Company',
        interestPerAnnum: 3.5,
        interestGain: 175
    };

    return (
        <>
        <Navbar currentTab="home"/>
        <div className="account-details">
            <div className="title">
                <h4>Account Details</h4>
            </div>
            <div className="detail">
                <span>Name:</span>
                <span>{account.name}</span>
            </div>
            <div className="detail">
                <span>Account Name:</span>
                <span>{account.accountName}</span>
            </div>
            <div className="detail">
                <span>Balance:</span>
                <span>${account.balance}</span>
            </div>
            <div className="detail">
                <span>Account Type:</span>
                <span>{account.accountType}</span>
            </div>
            <div className="detail">
                <span>Employer Name:</span>
                <span>{account.employerName}</span>
            </div>
            <div className="detail">
                <span>Interest per Annum:</span>
                <span>{account.interestPerAnnum}%</span>
            </div>
            <div className="detail" style={{marginBottom:"0px"}}>
                <span>Interest Gain:</span>
                <span>${account.interestGain}</span>
            </div>
        </div >
        </>
    );
}

export default AccountDetails;