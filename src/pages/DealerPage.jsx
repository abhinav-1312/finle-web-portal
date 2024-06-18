/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '../styles/DealerPage.css';
import { Link } from "react-router-dom";

const DealerPage = () => {
  return (
    <Container className="about-dealer-container">
      <Row>
        <Col>
          <h1>About Dealers</h1>
          <p>
            Dealers are individuals or firms that buy and sell securities for their own account, whether through a broker or otherwise. They play a crucial role in financial markets by providing liquidity and facilitating transactions between buyers and sellers.
          </p>
          <p>
            Dealers can be found in various financial markets, including stocks, bonds, commodities, and foreign exchange. They typically earn profits from the bid-ask spread, which is the difference between the price at which they buy a security and the price at which they sell it.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="dealer-card">
            <Card.Body>
              <Card.Title>Types of Dealers</Card.Title>
              <Card.Text>
                Dealers can be categorized into various types based on their activities and the markets they operate in. Some of the common types of dealers are:
                <ul>
                  <li>Stock Dealers</li>
                  <li>Bond Dealers</li>
                  <li>Commodity Dealers</li>
                  <li>Foreign Exchange Dealers</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Why Dealers are important</h2>
          <p>
            Dealers play a vital role in financial markets by providing liquidity and ensuring smooth functioning of the markets. They help investors buy and sell securities, enabling them to manage their investments and achieve their financial goals.
          </p>
          <p>
            Dealers also contribute to price discovery, as their buying and selling activities help determine the market price of securities. This process ensures that securities are fairly priced, reflecting their true value based on supply and demand.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to='/register'>
            <Button variant="primary" className="contact-btn">
              Register Now 
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default DealerPage;
