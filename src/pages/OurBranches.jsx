/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React, { useState } from 'react';
import { Container, Row, Col, Card, Table,  Form, Button } from 'react-bootstrap';
import '../styles/OurBranches.css';

const Branches = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [branches, setBranches] = useState([]);

  const handleSearchLocationChange = (event) => {
    setSearchLocation(event.target.value);
  };

  const handleSearchLocationSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement search functionality
    // For now, we'll just set some dummy data
    setBranches([
      {
        name: 'Mumbai Branch',
        address: '123 Main St, Mumbai, Maharashtra',
        phone: '+91 1234567890',
        hours: 'Mon-Fri 9am-5pm',
        services: ['Investment Advice', 'Loan Services'],
        latitude: 19.0760,
        longitude: 72.8777,
      },
      {
        name: 'Delhi Branch',
        address: '456 Oak St, Delhi',
        phone: '+91 1234567890',
        hours: 'Mon-Fri 9am-5pm',
        services: ['Investment Advice', 'Loan Services'],
        latitude: 28.7041,
        longitude: 77.1025,
      },
      {
        name: 'Bangalore Branch',
        address: '789 Maple St, Bangalore, Karnataka',
        phone: '+91 1234567890',
        hours: 'Mon-Fri 9am-5pm',
        services: ['Investment Advice', 'Loan Services'],
        latitude: 12.9716,
        longitude: 77.5946,
      },
    ]);
  };

  return (
    <Container className="branches-container">
      <Row>
        <Col>
          <h1 className="branches-header">Our Branches</h1>
          <p className="branches-subheader">Find a branch near you</p>
        </Col>
      </Row>

      <Row> <Col md={6}>
        <Form className="branches-form" onSubmit={handleSearchLocationSubmit}>
          <Form.Group controlId="formBasicLocation">
            <Form.Label>Enter your location</Form.Label>
            <Form.Control type="text" placeholder="City, State or Zip Code" value={searchLocation} onChange={handleSearchLocationChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>

      </Col></Row>
      <Row>
        <Col>
          <Table striped bordered hover className="branches-table">
            <thead>
              <tr>
                <th>Branch Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Hours</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody>
              {branches.map((branch) => (
                <tr key={branch.name}>
                  <td>{branch.name}</td>
                  <td>{branch.address}</td>
                  <td>{branch.phone}</td>
                  <td>{branch.hours}</td>
                  <td>{branch.services.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="branches-card">
            <Card.Body>
              <Card.Title>Mumbai Branch</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">123 Main St, Mumbai, Maharashtra</Card.Subtitle>
              <Card.Text>
                Phone: +91 1234567890<br />
                Hours: Mon-Fri 9am-5pm
              </Card.Text>
              <Button variant="primary">Get Directions</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="branches-card">
            <Card.Body>
              <Card.Title>Delhi Branch</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">456 Oak St, Delhi</Card.Subtitle>
              <Card.Text>
                Phone: +91 1234567890<br />
                Hours: Mon-Fri 9am-5pm
              </Card.Text>
              <Button variant="primary">Get Directions</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>

        <Col md={12}>
        <div className="supportpage-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14012.594818939584!2d77.0681985!3d28.5953154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd5c02a5efb3fcb8!2sDKG%20Labs%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1589464705605!5m2!1sen!2sin"
          title="Map"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"></iframe>
      </div>        </Col>

      </Row>
    </Container>
  );
};

export default Branches;
