/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */


import React from "react";
import { Container, Row, Col,  Button } from "react-bootstrap";
import '../styles/NBFCPage.css';
import { Link } from "react-router-dom";


const NBFCPage = () => {
  return (

    <Container className="about-nbfc-container">
      <Row>
        <Col>
          <h1>About NBFCs</h1>
          <p>
            Welcome to the FinLe onboarding process for Non-Banking Financial Companies (NBFCs). We
            are excited to welcome you into our network of financial institutions. Collaborating as an NBFC with
            FinLe offers various opportunities to expand your customer base, access new markets, and
            provide essential financial services. Below, we outline the steps to successfully onboard as an
            NBFC partner.
          </p>
          <h5>1.Initial Inquiry:</h5>
          <p>
            The journey begins with your initial inquiry. Contact our dedicated NBFC partnership team
            through the provided contact information or form on our website. Express your interest in
            becoming a FinLe NBFC partner, and we will get in touch with you promptly.
          </p>
          <h5>2.Consultation and Information Exchange:</h5>
          <p>
            Once we receive your inquiry, our team will schedule a consultation to discuss your specific
            goals, expectations, and the scope of the partnership. We will also share information about the
            services, benefits, and responsibilities of partnering with FinLe.
          </p>
          <h5>3.Due Diligence:</h5>
          <p>
            We conduct a thorough due diligence process to assess the compatibility of your NBFC with our
            platform. This process may involve a review of your financial stability, regulatory compliance,
            and adherence to industry best practices.
          </p>
          <h5>4.Agreement and Documentation:</h5>
          <p>
            Upon successful due diligence, we will provide you with the necessary agreements and
            documentation to formalize the partnership. These agreements will outline the terms and
            conditions of our partnership, including the scope of services and responsibilities.          </p>
          <h5>5.Integration and Training:</h5>
          <p>
            Our technical team will guide you through the integration process with the FinLe platform. We
            will provide training and support to ensure a seamless and efficient connection.     </p>
          <h5>6.Regulatory Compliance:</h5>
          <p>
            NBFCs must adhere to all regulatory requirements and standards. We will work together to
            ensure that your operations are fully compliant with relevant regulations.        </p>
          <h5>7.Service Rollout:</h5>
          <p>
            With the integration complete and compliance assured, you can begin offering your financial
            products and services to our vast network of customers and dealers         </p>
          <h5>8.Marketing and Growth:</h5>
          <p>
            We collaborate on marketing strategies to promote your services within our network. You gain
            access to our customer base, which allows you to expand your business and grow sustainably.
          </p>
          <h5>9.Ongoing Support and Collaboration:</h5>
          <p>
            We believe in the value of long-term partnerships. We provide continuous support, regular
            reviews, and collaboration opportunities to help you maximize the potential of our partnership.          </p>
          <h5>10.Marketing and Growth:</h5>
          <p>
            Your success as an NBFC partner is our success. We are committed to creating a win-win
            situation where both FinLe and your NBFC thrive, and our customers receive excellent financial
            services.          </p>

          <p>
            At FinLe, we believe in the power of partnerships and collaboration. If you are ready to take the
            next step and onboard as an NBFC with us, please  <Link to='/support'>contact our NBFC partnership
              team </Link> to initiate the process.
          </p>


        </Col>
      </Row>
  
      <Row>
        <Col>
          <Link to='/register'>
            <Button variant="primary" className="contact-btn">
              Register NBFC
            </Button>
          </Link>
          <br />
          <br />
          <p>
            We look forward to the opportunity to work with you, support your growth, and together, provide
            exceptional financial services to a wider audience.
          </p>
        </Col>
      </Row>
    </Container>

  );
};

export default NBFCPage;
