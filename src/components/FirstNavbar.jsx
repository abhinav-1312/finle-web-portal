/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function FirstNavbar() {
  useEffect(()=>{
    AOS.init(
      {
        duration:"700",
        delay:"300",
        offset:"80",
      }
    );
},[])
  return (
    <Navbar collapseOnSelect expand="sm" className='topheader ' >
      <Container style={{ background: '#010438' }} >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ background: 'white' }} />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="topNavbar"  >


            <Link to="/register">
              <Button className='Navbutton hover-nav' size='sm' >Become a Partner</Button>
            </Link>


            <Link to="/register">
              <Button className='Navbutton hover-nav' size='sm' >Register Your NBFC</Button>
            </Link>
            <Link to='/apply-loan' className='loan_btn1'>
              <Button className='Navbutton hover-nav' size='sm'>Apply Loan</Button>
            </Link>
          </Nav>


        </Navbar.Collapse>
        <Nav className='loan_btn'>
          <Link to='/apply-loan'>
            <Button className='Navbutton hover-nav' size='sm'>Apply Loan</Button>
          </Link>
        </Nav>
        <Button className='  Nav-login-button hover-nav' size='sm' >

          <Link to='/login' className='Nav-login hover-nav' > Login</Link>/
          <Link to='/register' className='Nav-login hover-nav' > Register</Link>
        </Button>
      </Container>
    </Navbar >
  );
}

export default FirstNavbar;