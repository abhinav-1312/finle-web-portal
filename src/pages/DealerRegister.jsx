/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/DealerRegister.css';

const DealerRegister = () => {
  return (
    <Container className="registration-form-container">
      <h2>Registration Form</h2>
      <Form className="registration-form">
        <Form.Group controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" required />
        </Form.Group>

        <Form.Group controlId="formDateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Email Address" required />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Phone Number" required />
        </Form.Group>

        <Form.Group controlId="formResidentialAddress">
          <Form.Label>Residential Address</Form.Label>
          <Form.Control type="text" placeholder="Residential Address" required />
        </Form.Group>

        <Form.Group controlId="formIdentificationDocuments">
          <Form.Label>Identification Documents</Form.Label>
          <Form.Control type="file" required />
        </Form.Group>

        <Form.Group controlId="formBankAccountDetails">
          <Form.Label>Bank Account Details</Form.Label>
          <Form.Control type="text" placeholder="Bank Account Details" required />
        </Form.Group>

        <Form.Group controlId="formBusinessDetails">
          <Form.Label>Business Details</Form.Label>
          <Form.Control type="text" placeholder="Business Details" />
        </Form.Group>

        <Form.Group controlId="formExperience">
          <Form.Label>Previous Experience in the Financial Industry</Form.Label>
          <Form.Control type="text" placeholder="Previous Experience" />
        </Form.Group>

        <Form.Group controlId="formPhotograph">
          <Form.Label>Photograph or Other Form of Identification</Form.Label>
          <Form.Control type="file" required />
        </Form.Group>

        <Form.Group controlId="formTradingPreferences">
          <Form.Label>Trading Preferences</Form.Label>
          <Form.Control type="text" placeholder="Trading Preferences" />
        </Form.Group>

        <Form.Group controlId="formRiskProfile">
          <Form.Label>Risk Profile and Investment Objectives</Form.Label>
          <Form.Control type="text" placeholder="Risk Profile and Investment Objectives" />
        </Form.Group>

        <Form.Group controlId="formAccountPreferences">
          <Form.Label>Account Preferences</Form.Label>
          <Form.Control type="text" placeholder="Account Preferences" />
        </Form.Group>

        <Form.Group controlId="formRegistrationType">
          <Form.Label>Registration Type</Form.Label>
          <Form.Control as="select" required>
            <option value="">Select Registration Type</option>
            <option value="dealer">Dealer</option>
            <option value="partner">Partner</option>
            <option value="dsa">  Direct Selling Agent</option>
            <option value="gp"> Growth Partner</option>
            <option value="ra/a"> Recovery Agency/Agents</option>
            <option value="ca/a">  Collection Agency/Agents</option>

          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default DealerRegister;
