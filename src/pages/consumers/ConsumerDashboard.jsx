/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../styles/consumer/ConsumerDashboard.css';

const MyDashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="dashboard-title">My Dashboard</h1>
          <p className="dashboard-description">Here you can view your account summary, recent transactions, financial goals, and more.</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="dashboard-card-title">Account Summary</Card.Title>
              <Card.Text className="dashboard-card-text">
                <p>Your current balance is $5,000. You have 2 accounts with us: a checking account and a savings account.</p>
                <p>Your checking account has a balance of $2,500 and your savings account has a balance of $2,500.</p>
                <p>You can view your account statements and transaction history by clicking on the respective account.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="dashboard-card-title">Recent Transactions</Card.Title>
              <Card.Text className="dashboard-card-text">
                <ul>
                  <li>04/25/2023 - $100 transfer to John Doe</li>
                  <li>04/24/2023 - $500 deposit from ABC Inc.</li>
                  <li>04/23/2023 - $50 purchase at Amazon.com</li>
                  <li>04/22/2023 - $25 ATM withdrawal</li>
                  <li>04/21/2023 - $200 transfer to Mary Smith</li>
                </ul>
                <p>You can view your full transaction history by clicking on the respective account.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="dashboard-card-title">Financial Goals</Card.Title>
              <Card.Text className="dashboard-card-text">
                <p>Set up a financial goal to track your progress towards saving for that new car, down payment, or vacation.</p>
                <p>You can create a new goal, view your existing goals, and track your progress towards each goal.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="dashboard-card-title">Budgeting Tool</Card.Title>
              <Card.Text className="dashboard-card-text">
                <p>Use our budgeting tool to create a monthly budget and track your expenses.</p>
                <p>You can set up categories for your expenses, track your spending, and view reports to help you stay on track.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyDashboard;
