/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/LoanEligibility.css';

const LoanEligibility = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container className="loan-eligibility-container">
      <Row>
        <Col>
          <h2>Check Loan Eligibility</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" placeholder="Enter your name" />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Enter your email" />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formIncome">
              <Form.Label>Monthly Income</Form.Label>
              <Form.Control required type="number" placeholder="Enter your monthly income" />
              <Form.Control.Feedback type="invalid">
                Please enter your monthly income.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formLoanAmount">
              <Form.Label>Loan Amount</Form.Label>
              <Form.Control required type="number" placeholder="Enter desired loan amount" />
              <Form.Control.Feedback type="invalid">
                Please enter the desired loan amount.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Check Eligibility
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoanEligibility;
