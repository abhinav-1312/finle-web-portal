/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React from 'react';
import { Container, Row, Col, Button, ListGroup, Card } from 'react-bootstrap';
import '../styles/ProductPage.css';
import prd_img from "../assets/productImg/prd1.png"

const ProductPage = () => {
  return (
    <div className='productpage'>
      <Container className='' >
        <Row className="mt-5 ">
          <Col md={6}>
            <h1>FinLe's Electric Rickshaw Lease Program</h1>
            <p className="lead mt-4">
            At FinLe, we understand the challenges and financial constraints rickshaw drivers face when considering the transition to electric rickshaws. Our lease product is specifically crafted to tackle these challenges head-on. Through our flexible lease program, drivers can enjoy the myriad advantages of electric rickshaws without the burdens associated with ownership. We eliminate the need for substantial upfront investments, providing a hassle-free way to access eco-friendly urban transportation.            </p>
            <Button variant="primary" className="mt-4">
              Apply Now
            </Button>
          </Col>
          <Col md={6}>
            <img src={prd_img} alt="error" className="img-fluid" />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6}>
            <h2>A Path to Ownership and Financial Independence</h2>
            <p>
            At the conclusion of the lease period, drivers have the option to take ownership, providing a clear path toward financial independence. With FinLe, we're not just leasing vehicles; we're leasing a sustainable and profitable future.            </p>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>Product Details</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Minimum Deposit	Up to Rs. 47,000</ListGroup.Item>
                <ListGroup.Item>File Charge	Rs. 5000</ListGroup.Item>
                <ListGroup.Item>Daily Payment for 24 Months	Rs. 310</ListGroup.Item>
                <ListGroup.Item>Term	24 months</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <Card>
              <Card.Header>Mandatory Requirements</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Valid driver's license</ListGroup.Item>
                <ListGroup.Item>Proof of income</ListGroup.Item>
                <ListGroup.Item>Proof of insurance</ListGroup.Item>
                <ListGroup.Item>Proof of residency</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <Card>
              <Card.Header>Eligibility Criteria</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Age	: Should be between 21 to 59</ListGroup.Item>
                <ListGroup.Item>Documents required	Applicant : Aadhar, PAN, DL, Electricity bill, Bank statements (6 months), 6 cheques</ListGroup.Item>
                <ListGroup.Item> Guarantor : PAN, Aadhar & 2 cheques</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <Card>
              <Card.Header>  Other applicable charges</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Maintenance	To be paid by customer</ListGroup.Item>
                <ListGroup.Item>Insurance	2 years insurance mandatory - To be paid by customer</ListGroup.Item>
                <ListGroup.Item>Legal/Incidental charges	At actual</ListGroup.Item>
                <ListGroup.Item>Late fee	Will be defined as per the customer's profile</ListGroup.Item>
                <ListGroup.Item>Model</ListGroup.Item>
                <ListGroup.Item> *APR = Annual Percentage Rate. Rates are subject to change without notice and may vary based on creditworthiness, loan amount, and loan term.
                </ListGroup.Item>

              </ListGroup>
              <Card.Footer>
              </Card.Footer>
            </Card>
          </Col>
        </Row>



        <Row className="mt-5">
        <Col md={12}>
          <Card>
            <Card.Header>Terms & Conditions</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>- It is mandatory to install IOT devices</ListGroup.Item>
              <ListGroup.Item>- Post the lease period or once all the instalments are paid, the vehicle can be transferred under the lessee's name.</ListGroup.Item>
              <ListGroup.Item>- Responsibility & expenses of lease transfer will be lessee's responsibility. Dealer is not liable for any matter related to lease transfer</ListGroup.Item>
              <ListGroup.Item>- Autopay is mandatory for this product.</ListGroup.Item>
             
            </ListGroup>
            <Card.Footer>
            </Card.Footer>
          </Card>
        </Col>
      </Row>



      </Container>
    </div>
  );
};

export default ProductPage;