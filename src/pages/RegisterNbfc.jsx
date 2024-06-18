/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/Register-nbfc.css';

const RegisterNbfc = () => {
  return (
    <Container className="nbfc-registration-form-container">
      <h2>NBFC Registration</h2>
      <Form className="nbfc-registration-form">
        <Form.Group controlId="formCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" placeholder="Company Name" />
        </Form.Group>

        <Form.Group controlId="formRegisteredOfficeAddress">
          <Form.Label>Registered Office Address</Form.Label>
          <Form.Control type="text" placeholder="Registered Office Address" />
        </Form.Group>

        <Form.Group controlId="formDateOfIncorporation">
          <Form.Label>Date of Incorporation</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group controlId="formCompanyType">
          <Form.Label>Company Type</Form.Label>
          <Form.Control as="select">
            <option>Select Company Type</option>
            <option>Private</option>
            <option>Public</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formCompanyRegistrationNumber">
          <Form.Label>Company Registration Number (CIN)</Form.Label>
          <Form.Control type="text" placeholder="Company Registration Number" />
        </Form.Group>

        <Form.Group controlId="formCompanyPAN">
          <Form.Label>Company PAN</Form.Label>
          <Form.Control type="text" placeholder="Company PAN" />
        </Form.Group>

        <Form.Group controlId="formDirectorName">
          <Form.Label>Director Name</Form.Label>
          <Form.Control type="text" placeholder="Director Name" />
        </Form.Group>

        <Form.Group controlId="formDirectorPAN">
          <Form.Label>Director PAN</Form.Label>
          <Form.Control type="text" placeholder="Director PAN" />
        </Form.Group>

        {/* Add more fields for additional directors as needed */}


        <Form.Group controlId="formShareholderName">
          <Form.Label>Shareholder Name</Form.Label>
          <Form.Control type="text" placeholder="Shareholder Name" />
        </Form.Group>

        <Form.Group controlId="formShareholderPAN">
          <Form.Label>Shareholder PAN</Form.Label>
          <Form.Control type="text" placeholder="Shareholder PAN" />
        </Form.Group>

        {/* Add more fields for additional shareholders as needed */}

        <Form.Group controlId="formNetWorth">
          <Form.Label>Net Worth</Form.Label>
          <Form.Control type="text" placeholder="Net Worth" />
        </Form.Group>

        <Form.Group controlId="formAssetsUnderManagement">
          <Form.Label>Assets Under Management</Form.Label>
          <Form.Control type="text" placeholder="Assets Under Management" />
        </Form.Group>

        {/* Add more fields for financial details as needed */}



        <Form.Group controlId="formComplianceOfficerName">
          <Form.Label>Compliance Officer Name</Form.Label>
          <Form.Control type="text" placeholder="Compliance Officer Name" />
        </Form.Group>

        <Form.Group controlId="formComplianceOfficerEmail">
          <Form.Label>Compliance Officer Email</Form.Label>
          <Form.Control type="email" placeholder="Compliance Officer Email" />
        </Form.Group>

        {/* Add more fields for compliance as needed */}


        <Form.Group controlId="formMemorandumOfAssociation">
          <Form.Label>Memorandum of Association</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Form.Group controlId="formArticlesOfAssociation">
          <Form.Label>Articles of Association</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        {/* Add more fields for other documents as needed */}

        <Form.Group className='nbfc-register-textarea' controlId="formBusinessPlan">
          <Form.Label>Business Plan</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Business Plan" />
        </Form.Group>

        {/* Add more fields for business plan as needed */}


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterNbfc;
