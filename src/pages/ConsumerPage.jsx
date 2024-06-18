/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */


import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import '../styles/ConsumerPage.css';
import EMICalculator from './EMICalculator';
import BestOffers from '../components/BestOffers';
import Products from '../components/ProductSection';
import ProfileSection from './consumers/Profilesection';
import ConsumerOderes from './consumers/ConsumerOders';
import ConsumerDashboard from './consumers/ConsumerDashboard';
import AccountSection from './consumers/ConsumerAccount';
import { getAuth, signOut } from 'firebase/auth';

const ConsumerPage = () => {
  const [activeTab, setActiveTab] = useState('accounts');
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        // Optionally, redirect the user to a login page or home page
        window.location.href = '/login';
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper" className="consumer-sidebar">
          <Nav className="flex-column">

          {activeTab === 'profile' && (
            <div>
              <div className="consumer-profile-card">
                <img src="https://via.placeholder.com/800x400?text=first+Slide" alt="Profile" className="consumer-profile-image" />
                <h4 className="consumer-profile-name">Your Name</h4>
                <p className="consumer-profile-category">Category</p>
              </div>
              <ProfileSection />
            </div>
          )}
                      <Nav.Link href="#" active={activeTab === 'dashboard'} onClick={() => handleTabClick('dashboard')} className="consumer-sidebar-link">My Dashboard</Nav.Link>
            <Nav.Link href="#" active={activeTab === 'accounts'} onClick={() => handleTabClick('accounts')} className="consumer-sidebar-link">My Accounts</Nav.Link>
            <Nav.Link href="#" active={activeTab === 'orders'} onClick={() => handleTabClick('orders')} className="consumer-sidebar-link">My Orders</Nav.Link>
            <Nav.Link href="#" active={activeTab === 'buy-products'} onClick={() => handleTabClick('buy-products')} className="consumer-sidebar-link">Buy Products</Nav.Link>
            <Nav.Link href="#" active={activeTab === 'offers'} onClick={() => handleTabClick('offers')} className="consumer-sidebar-link">Offers</Nav.Link>
            <Nav.Link href="#" active={activeTab === 'loan-calculator'} onClick={() => handleTabClick('loan-calculator')} className="consumer-sidebar-link">Loan Calculator</Nav.Link>
            <Button variant="#" onClick={handleLogout} className="consumer-sidebar-logout">Logout</Button>
          </Nav>
        </Col>
        <Col xs={10} id="page-content-wrapper" className="consumer-page-content">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/" className="consumer-navbar-brand"> Finle </Navbar.Brand>
          </Navbar>
          <Container fluid>
            {activeTab === 'profile' && (
              <div>
                <ProfileSection />
              </div>
            )}
            {activeTab === 'dashboard' && (
              <div>
                <ConsumerDashboard />
              </div>
            )}
            {activeTab === 'accounts' && (
              <div>
                <AccountSection />
              </div>
            )}
            {activeTab === 'orders' && (
              <div>
                <ConsumerOderes />
              </div>
            )}
            {activeTab === 'buy-products' && (
              <div>
                <h1>Buy Products</h1>
                <p>Here you can browse and purchase products offered by our partners.</p>
                <Products />
              </div>
            )}
            {activeTab === 'offers' && (
              <div>
                <h1>Offers</h1>
                <p>Here you can view and redeem special offers and promotions.</p>
                <BestOffers />

              </div>
            )}
            {activeTab === 'loan-calculator' && (
              <div>
                <h1>Loan Calculator</h1>
                <p>Here you can calculate your loan payments and interest rates.</p>
                <EMICalculator />
              </div>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ConsumerPage;
