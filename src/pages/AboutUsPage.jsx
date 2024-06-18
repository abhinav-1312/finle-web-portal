/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/AboutUsPage.css';
import Team from '../components/Team';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className='about-us'>
      <Container className="about-us-page">

        <Row className="section">
          <Col className="card-column">
            <Card className="about-card">
              <Card.Body>
                <div className='about-us-title'>
                  <Card.Title className='about-title' >About Us</Card.Title>
                  <p className="company-tagline ">
                    Welcome to FinLe - Your Partner in Sustainable Urban Transportation.
                  </p>
                </div>
                <Card.Text>
                  At FinLe, we're on a mission to transform the landscape of urban transportation. Our
                  journey began with a vision of cleaner, more efficient mobility solutions, and today,
                  we are proud to be at the forefront of the green revolution in the rickshaw industry.
                </Card.Text>
                <Card.Text>
                  <b>Our Story : </b>
                  Founded by a diverse team of visionaries, FinLe emerged from a shared passion for
                  eco-friendly mobility and a deep commitment towards sustainability. Our co-founders bring
                  a wealth of experience and expertise to the table, each playing a pivotal role in
                  shaping the future of urban transportation.
                </Card.Text>
                <Card.Text>
                  <b>Our mission at FinLe is clear :</b> to empower rickshaw drivers, promote sustainable
                  urban transportation, and contribute to a cleaner environment. We believe in a future
                  where electric rickshaws are the norm, and we're working tirelessly to make that
                  future a reality.
                </Card.Text>
                <Card.Text>
                  <b>What Sets Us Apart : </b>
                  At FinLe, we stand out because of our unwavering commitment to simplifying the
                  transition to electric rickshaws for drivers and dealers. We provide quick and
                  hassle-free loans for those looking to make the switch, and flexible leasing options
                  for drivers who want to experience the benefits without the complexities of
                  ownership.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="section">
          <Team />

          <Col className="card-column">
            <Card className="team-card">

            </Card>
          </Col>

        </Row>

        <Row className="section">
          <Col className="card-column">
            <Card className="contact-card">
              <Card.Body>
                <Card.Title className='last-body-head'>Join Us on the Journey</Card.Title>
                <Card.Text className='last-body' >
                  Whether you're a rickshaw driver looking for financing, a dealer searching for growth
                  opportunities, or simply curious about the future of urban transportation, we invite
                  you to join us. The transition to cleaner, more efficient rickshaws is not just a trend;
                  it's the path to a greener and more prosperous future.
                </Card.Text>
                <p className='last-body'>Explore our platform, connect with us, and let's drive change together.</p>
                <ul className='last-body'>
                  <li><strong>Email:</strong> info@finle.in</li>
                  <li><strong>Phone:</strong> +91 9303800246</li>
                  <li><strong>Twitter:</strong> @yourfinle</li>
                  <li><strong>Facebook:</strong>  /yourfinle</li>
                  <li><strong>Instagram:</strong>  yourfinle</li>
                </ul>
                <p className='last-body'>Our support team is available 24/7 to help you with any issues you may encounter.</p>
                <Link to={'/support'}> <Button className="contact-btn" variant="primary">Get in Touch</Button></Link>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AboutUsPage;
