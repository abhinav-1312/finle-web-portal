/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */


/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Carousel, Card } from 'react-bootstrap';
import '../../styles/consumer/ProfileSection.css';

const ProfileSection = () => {
  const [firstName, setFirstName] = useState('Ujjwal');
  const [lastName, setLastName] = useState('Kumar');
  const [category, setCategory] = useState('Consumer');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailId, setEmailId] = useState('demo@example.com');
  const [UserId, setUserId] = useState('');
  const [image, setImage] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const profileId = localStorage.getItem('userId')
    setUserId(profileId)
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const apiUrl = 'https://finle-api-gateway.azurewebsites.net/user-service/userDetails';
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify({
            userId,
          }),
        });
        if (response.ok) {
          const responseData = await response.json();
          const { firstName, lastName, userType, emailId } = responseData.responseData;
          setFirstName(firstName);
          setLastName(lastName);
          setCategory(userType);
          setEmailId(emailId);
        } else {
          console.error(response.statusText);
          // Handle error response
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchUserDetails();
  }, []);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddressChange = (event) => {
    const input = event.target.value;
    if (/^\d{0,10}$/.test(input)) { // Only allow up to 10 digits
      setMobileNumber(input);
    }
    setMobileNumber(event.target.value);
  };

  const handleEmailIdChange = (event) => {
    setEmailId(event.target.value);
  };





  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const apiUrl = 'https://finle-api-gateway.azurewebsites.net/user-service/updateUser';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          userId: localStorage.getItem('userId'),
          firstName: firstName,
          lastName: lastName,
          email: emailId,
          mobileNumber: mobileNumber,
          category: category,
        }),
      });
      if (response.ok) {
        alert('Success');
        // Handle successful update
      } else {
        console.error(response.statusText);
        // Handle error response
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <Container className="profileSection-container">
      <Row>
        <Col>
          <h1 className="profileSection-header">Profile </h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div className="profileSection-image-container">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="ProfileSection" className="profileSection-image" />
            {editMode ? (
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className="profileSection-image-label">Update Profile  Image</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} className="profileSection-image-input" />
              </Form.Group>
            ) : null}
          </div>
        </Col>
        <Col md={8}>
          {editMode ? (

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUserId">
                <Form.Label>UserId</Form.Label>
                <Form.Control type="UserId" placeholder="UserId" value={UserId} className="profileSection-UserId-input" disabled />
              </Form.Group>

              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={handleFirstNameChange} className="profileSection-first-name-input" />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={handleLastNameChange} className="profileSection-last-name-input" />
              </Form.Group>

              <Form.Group controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Enter category" value={category} onChange={handleCategoryChange} className="profileSection-category-input" />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="Enter address" value={mobileNumber} onChange={handleAddressChange} className="profileSection-address-input" />
              </Form.Group>

              <Form.Group controlId="formEmailId">
                <Form.Label>Email Id</Form.Label>
                <Form.Control type="email" placeholder="Enter email id" value={emailId} onChange={handleEmailIdChange} className="profileSection-email-id-input" />
              </Form.Group>





              <Button variant="primary" type="submit" className="profileSection-submit-button">
                Update ProfileSection
              </Button>
              <Button variant="secondary" onClick={handleCancelClick} className="profileSection-cancel-button">
                Cancel
              </Button>
            </Form>
          ) : (
            <div>
              <p className="profileSection-name">{firstName} {lastName}</p>
              <p className="profileSection-category">{UserId}</p>
              <p className="profileSection-category">{category}</p>
              <p className="profileSection-address">{mobileNumber}</p>
              <p className="profileSection-email">{emailId}</p>
              <Button variant="primary" onClick={handleEditClick} className="profileSection-edit-button">
                Edit ProfileSection
              </Button>
            </div>
          )}
        </Col>
      </Row>
      <Row className='profileSection-slider'>
        <Col xs={6}>
          <h3>Pre-Approved Offers</h3>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://via.placeholder.com/800x400?text=first+Slide"
                alt="Second slide"
              />
              <Card>
                <Card.Body>
                  <Card.Title>Pre-Approved Offer 1</Card.Title>
                  <Card.Text>
                    Description of pre-approved offer 1
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://via.placeholder.com/800x400?text=Second+Slide"
                alt="Second slide"
              />
              <Card>
                <Card.Body>
                  <Card.Title>Pre-Approved Offer 2</Card.Title>
                  <Card.Text>
                    Description of pre-approved offer 2
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://via.placeholder.com/800x400?text=Second+Slide"
                alt="Second slide"
              />
              <Card>
                <Card.Body>
                  <Card.Title>Pre-Approved Offer 3</Card.Title>
                  <Card.Text>
                    Description of pre-approved offer 3
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={6}>
          <h3>Best Offers</h3>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://via.placeholder.com/800x400?text=first+Slide"
                alt="Second slide"
              />
              <Card>
                <Card.Body>
                  <Card.Title>Best Offer 1</Card.Title>
                  <Card.Text>
                    Description of Best Offer 1
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://via.placeholder.com/800x400?text=Second+Slide"
                alt="Second slide"
              />
              <Card>
                <Card.Body>
                  <Card.Title>Best Offer 2</Card.Title>
                  <Card.Text>
                    Description of Best offer 2
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://via.placeholder.com/800x400?text=Second+Slide"
                alt="Second slide"
              />
              <Card>
                <Card.Body>
                  <Card.Title>Best Offer 3</Card.Title>
                  <Card.Text>
                    Description of Best offer 3
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSection;
