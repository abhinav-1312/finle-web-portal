/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/ApplyLoan.css';
import mobileImg from '../assets/images/mobileImg.png';
import EMICalculator from './EMICalculator';
import FAQ from '../components/FAQ'
import appleIcon from '../assets/images/appleIcon.svg'
import playstoreIcon from '../assets/images/playstoreIcon.svg'
import { Link } from 'react-router-dom';

const ApplyLoan = () => {
  return (
    <div className='apply-loan'>
      <Container className="apply-loan-container">
        <Row className="apply-loan-section">
          <Col md={4} className="apply-loan-text">

            <h2>Apply for a Loan in 3 Easy Steps</h2>
            <p>Get the funds you need with our easy and hassle-free loan application process.</p>
            <ol>
              <li>Download our mobile app and create an account</li>
              <li>Fill out the loan application form and submit</li>
              <li>
                Get approved and receive your funds
              </li>
            </ol>

            <div className='apply-button' >
              <h3>Download the Fintech
                app to getstarted</h3>
              <p>
                Join the category of over 1 million people who are using
                Fintech to shop, Best Loan, slay, eat, lounge, ride, and pay later.
              </p>
              <div className='storeBtn'>
                <Link to='https://play.google.com/store/apps/details?id=com.dkglabs.e_savari&pcampaignid=web_share'>

                  <div className='storeIcon'>
                    <img src={appleIcon} alt='appstore' />
                    <Button variant="light" href="https://play.google.com/store/apps/details?id=com.dkglabs.e_savari&pcampaignid=web_share" >  <span>Donwload on the</span> <br />
                      App Store
                    </Button>
                  </div>
                </Link>
                <Link to='https://play.google.com/store/apps/details?id=com.dkglabs.e_savari&pcampaignid=web_share'>
                  <div className='storeIcon'>
                    <img src={playstoreIcon} alt='playstore' />
                    <Button variant="light" href="https://play.google.com/store/apps/details?id=com.dkglabs.e_savari&pcampaignid=web_share" >  <span>Get it on</span><br />
                      Google Play
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6} className="apply-loan-image">
            <img src={mobileImg} alt="Mobile App" className="mobile-img" />
          </Col>
        </Row>
        <Row className="loan-calculator-section mt-5">
          <Col>
            {/* Add loan calculator component here */}
            <EMICalculator />
          </Col>
        </Row>

        <Row className="faqs-section mt-5">
          <Col>
            <FAQ />   {/* Add FAQs component here */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ApplyLoan;
