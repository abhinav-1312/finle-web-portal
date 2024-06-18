/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/BusinessLoan.css';


const BusinessLoan = () => {
  return (
    <div className="business-loan">
      <Container className="business-loan-container ">
        <Row className="business-loan-header mb-3">
          <Col>
            <h2 className="business-loan-title">Business Loans</h2>
            <p className="business-loan-subtitle">Our business loans offer competitive features and rates to help your business grow.</p>
          </Col>
        </Row>
        <Row className="business-loan-cardSection">
          <Col md={4} className="mb-4">
            <Card className="business-loan-card">
            <Card.Header>Small Business Loan</Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Up to $50,000</Card.Subtitle>
                <Card.Text>
                  Our small business loan is ideal for business owners who need a quick infusion of cash to grow their business.
                  Features include:
                  <ul>
                    <li>Interest rate as low as 5%</li>
                    <li>No collateral required</li>
                    <li>Flexible repayment terms</li>
                  </ul>
                </Card.Text>
                <Button variant="primary" className="business-loan-apply-btn">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="business-loan-card">
            <Card.Header>Business Line of Credit</Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Up to $100,000</Card.Subtitle>
                <Card.Text>
                  Our business line of credit is perfect for businesses that require ongoing access to funds for day-to-day operations.
                  Features include:
                  <ul>
                    <li>Interest rate as low as 8%</li>
                    <li>Collateral required</li>
                    <li>Flexible repayment terms</li>
                  </ul>
                </Card.Text>
                <Button variant="primary" className="business-loan-apply-btn">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="business-loan-card">
            <Card.Header>Equipment Financing</Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Up to $500,000</Card.Subtitle>
                <Card.Text>
                  Our equipment financing product is designed to help businesses purchase or lease new equipment.
                  Features include:
                  <ul>
                    <li>Interest rate as low as 7%</li>
                    <li>Collateral required (equipment)</li>
                    <li>Flexible repayment terms</li>
                  </ul>
                </Card.Text>
                <Button variant="primary" className="business-loan-apply-btn">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="business-loan-requirements mt-5">
          <Col>
            <h5 className="business-loan-requirements-title">Eligibility Requirements:</h5>
            <ul>
              <li>Minimum credit score: 600</li>
              <li>Minimum annual revenue: $100,000</li>
              <li>Business must be in operation for at least 2 years</li>
              <li>Collateral may be required depending on loan type and amount</li>
            </ul>
          </Col>
        </Row>
        <Row className="business-loan-details mt-5">
          <Col>
            <h5 className="business-loan-details-title">Business Loan Details:</h5>
            <ul>
              <li>Loan amounts up to $500,000</li>
              <li>Flexible repayment terms up to 5 years</li>
              <li>No prepayment penalties</li>
              <li>Competitive interest rates starting at 5%</li>
              <li>Collateral may be required depending on loan type and amount</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BusinessLoan