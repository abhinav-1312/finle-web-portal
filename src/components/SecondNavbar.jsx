/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../assets/logo/finle-logobl.png'
import { Link, useLocation } from 'react-router-dom';
import "../styles/ProductPage.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function SecondNavbar() {
  useEffect(()=>{
    AOS.init(
      {
        duration:"700",
        delay:"300"
      }
    );
},[])
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='secondHeader' >
      <Container className="secondnav-space">
        <Navbar.Brand href="/" >
          <img src={icon} alt="logo SVG" className='logo' />
          { /*<span className='navtopdorp logo-title'>FinLe</span>*/}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav  className='sec_nav_link' style={{ background: '#F8F9FA' }} defaultActiveKey={location.pathname}>
            <Nav.Link as={Link} className='navtopdorp ' eventKey={2} to="/">Home</Nav.Link>
            <Nav.Link as={Link} className='navtopdorp' eventKey={2} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} className='navtopdorp' eventKey={2} to="/nbfc">NBFC</Nav.Link>
            <Nav.Link  className='navtopdorp product-main' >Products
               
               <span className='product-sub'>
               <Nav.Link as={Link} className='navtopdorp' eventKey={2} to="/products">3W Lease</Nav.Link>
               
               <Nav.Link as={Link} className='navtopdorp' eventKey={2} to="/loan" > 3W Loan</Nav.Link>
               </span>
            </Nav.Link>


            <Nav.Link as={Link} className='navtopdorp' eventKey={2} to="/dealer">Dealer</Nav.Link>
            <Nav.Link as={Link} className='navtopdorp'  eventKey={2} to="/news&blog">News & Blog</Nav.Link>
            { /*  <Nav.Link as={Link} className='navtopdorp' eventKey={2} to="/branches">Our Branches</Nav.Link>
                      <Nav.Link as={Link} className='navtopdorp' eventKey={2} to="/business-loan">Business Loan</Nav.Link>*/}
            <Nav.Link as={Link} className='navtopdorp' eventKey={2} to="/support">Contact Us</Nav.Link>
            { /* <Nav.Link as={Link} className='navtopdorp' eventKey={2} to="/privacy-policy">Privacy Policy</Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

export default SecondNavbar;

