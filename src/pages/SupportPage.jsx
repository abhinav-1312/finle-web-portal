/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */


import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/SupportPage.css'


const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const apiUrl = 'https://finle-api-gateway.azurewebsites.net/user-service/addContactUs';

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(); // Format the date as per your requirement
  
    const requestBody = {
      txnDate: formattedDate,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      category: formData.subject,
      remarks: formData.message
    };
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(requestBody)
      });
      const responseData = await response.json();
      if (response.ok) {
        if (responseData.responseStatus.statusCode === 0) {
          alert('form submitted successfully!')
          // alert(responseData.responseData); // Display the success message from the response
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject:'',
            message: ''
          });
        } else {
          alert('Form submission failed. Please try again.'); // Display a generic error message
        }
      } else {
        alert('Form submission failed. Please try again.');
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className=''>
    <Container className="mt-5 support-page supprt-main">
      <Row>
        <Col xs={12} md={12} className=" supportpage-container">
          <div className="supportpage-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14716.319783841765!2d75.9060038!3d22.7624142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d51fc2dca3d%3A0x60743853a0a1f88f!2sE-Savari!5e0!3m2!1sen!2sin!4v1716452646573!5m2!1sen!2sin"
              title="Map"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"></iframe>
          </div>
        </Col>
        <Col xs={12} md={6} className="supportpage-address">
        <div style={{ alignItems: 'center', paddingTop: '2rem' }}>
        
        <div>

          <p>Email: info@finle.in</p>
          <p>Phone: 9303800246</p>
          <p>1st Floor, 18, Gulab Bagh, Devas Naka,<br />
          Near Metro Mall, Indore, Madhya Pradesh, 452010
            <br></br>
 {/*           <br />
            Address : DKG Labs Pvt. Ltd.,<br />
            201C/6, D-21 Corporate Dwarka,
            New Delhi – 110077 
  */}
          </p>
        </div>



      </div>
        </Col>
        <Col xs={12} md={6} className="mb-4 supportpage-form">
          <Form onSubmit={handleSubmit}>
            <h2 className="">Get In Touch</h2>
            <span>Get in touch with us if you have any queries</span>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" required placeholder="Enter Name" value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEmail" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" required placeholder="Enter  Email" value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" name="phone" required placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" name="subject" required placeholder="Enter Subject" value={formData.subject} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} required name="message" placeholder="Enter Message" value={formData.message} onChange={handleChange} />
            </Form.Group>
            <Button className='supportpage-button contact-btn' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default SupportPage;
