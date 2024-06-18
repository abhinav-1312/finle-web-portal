/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  useEffect(()=>{
    AOS.init(
      {
        duration:"700",
        delay:"300"
      }
    );
},[])
  const [formData, setFormData] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };


  const handleSubmit = async e => {
    e.preventDefault();

    const apiUrl = 'https://finle-api-gateway.azurewebsites.net/user-service/addContactUs';

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(); 

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
            subject: '',
            message: ''
          });
        } else {
          alert('Form submission failed. Please try again.'); 
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
    <div className='ContactUs' >
      <h1 data-aos="zoom-in-down">NEWS LETTER</h1>
      <p className='testimonal_subheading' style={{color:"black"}} data-aos="zoom-in-down">
        Get the latest news about Fintech! We promise no spam, only bundles of joy.
      </p>
      <InputGroup className="mb-3 contact-email" size="lg" data-aos="zoom-in-down">
       <Form.Control
          placeholder="Enter your email address"
          aria-label="Enter your email address"
          aria-describedby="basic-addon2"
          className='input-place'
        />
        
        <Button variant="primary" id="button-addon2">
          Subscribe
        </Button>
      </InputGroup>

      <div className='Contact-form' >
        <div>
          <h1>Don't hesitate to <br /> contact us for any <br /> information</h1>
          <p style={{width:"190px"}}>Call us for immediate support  to this number</p>
          +91 9303800246
        </div>
        <Form style={{}} onSubmit={handleSubmit} >
          <Form.Group className="mb-3 formGroup " controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" required placeholder="Enter your name" value={formData.name} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
            <Form.Text className=" " style={{color:"white"}}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='formGroup' controlId="formBasicSubject">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" name="phone" required placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} />
          </Form.Group>
          <Form.Group className='formGroup' controlId="formSubject">
            <Form.Label>How can we assist you?</Form.Label>
            <Form.Select name="subject" required value={formData.subject} onChange={handleChange}>
              <option value="">Select an option</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Loan Application">Loan Application</option>
              <option value="Dealer Partnership">Dealer Partnership</option>
              <option value="Technical Support">Technical Support</option>
              <option value="NBFC partnership">NBFC partnership</option>
              <option value="Others">Others</option>
            </Form.Select>
          </Form.Group>


          <Form.Group className='formGroup' controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} name="message" required placeholder="Enter your inquiry or message." value={formData.message} onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" className='formGroup button-addon2' type="submit">
            Send Message
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default ContactUs;
