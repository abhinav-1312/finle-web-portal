/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */


import React from 'react';
import ProfileSection from './Profilesection';
import { Card } from 'react-bootstrap';
import '../../styles/consumer/ConsumerAccount.css';
import { Row, Col } from 'react-bootstrap';


const AccountSection = () => {
  return (
    <div>
      <ProfileSection />
      <Row>
        <Col className='Acoountsection'>
          <h1 className="account-title">My Accounts</h1>
          <p className="account-description">Here you can view your account balances, statements, and more.</p>
          <div className="account-card-container">
            <Card className="account-card">
              <Card.Body>
                <Card.Title className="account-card-title">Savings Account</Card.Title>
                <Card.Text className="account-card-text">
                  <p>Account Number: XXXXXXXX</p>
                  <p>Balance: $10,000.00</p>
                  <p>Interest Rate: 0.75%</p>
                  <p>Account Type: Savings</p>
                  <p>Open Date: 01/01/2022</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="account-card">
              <Card.Body>
                <Card.Title className="account-card-title">Checking Account</Card.Title>
                <Card.Text className="account-card-text">
                  <p>Account Number: XXXXXXXX</p>
                  <p>Balance: $2,500.00</p>
                  <p>Interest Rate: 0.10%</p>
                  <p>Account Type: Checking</p>
                  <p>Open Date: 01/01/2022</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="account-card">
              <Card.Body>
                <Card.Title className="account-card-title">Credit Card</Card.Title>
                <Card.Text className="account-card-text">
                  <p>Account Number: XXXXXXXX</p>
                  <p>Balance: -$500.00</p>
                  <p>Interest Rate: 18.99%</p>
                  <p>Account Type: Credit Card</p>
                  <p>Open Date: 01/01/2022</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};


export default AccountSection;
