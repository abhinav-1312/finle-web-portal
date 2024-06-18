/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
// import appleIcon from '../assets/images/appleIcon.svg'
import playstoreIcon from '../assets/images/playstoreIcon.svg'
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(()=>{
    AOS.init(
      {
        duration:"700",
        delay:"300"
      }
    );
},[])
  return (

    <div className='footer'>


      <div data-aos="zoom-in-down" style={{ alignItems: 'center', paddingTop: '2rem' }}>
        <div>

          <p>Email: info@finle.in</p>
          <p>Phone: 9303800246</p>
          <p>1st Floor, 18, Gulab Bagh, <br />Devas Naka,
          Near Metro Mall, Indore,<br /> Madhya Pradesh, 452010
            <br></br>
            
        {/*    Address : DKG Labs Pvt. Ltd.,<br />
            201C/6, D-21 Corporate Dwarka,
            New Delhi – 110077
  */}
            </p>
        </div>



      </div>
      <div data-aos="zoom-in-down">
        <h5>Company</h5>
        <p><Link className='footer-link' to='/about'>About Us </Link></p>
        <p><Link className='footer-link' to='/products'>Products </Link></p>
        <p><Link className='footer-link' to='/NBFC'>NBFC  </Link></p>
        <p><Link className='footer-link' to='/support'>Contact Us </Link></p>
        <Link to='https://play.google.com/store/apps/details?id=com.dkglabs.e_savari'>
          <div className='storeIcon'>
            <img src={playstoreIcon} alt='playstore' />
            <Button variant="light" size='sm' >  <span>Get it on</span><br />
              Google Play
            </Button>
          </div>
        </Link>

      </div>
      <div data-aos="zoom-in-down">
        <h5>Help & Support </h5>
        <p><Link className='footer-link' to='/news&blog'>News & Blog  </Link></p>
        <p><Link className='footer-link' to='/faq'>FAQ  </Link></p>
        <p><Link className='footer-link' to='/privacy-policy'> Privacy Policy </Link></p>
        <p><Link className='footer-link' to='/term'>Terms and Conditions  </Link></p>

        {/* <Link to='https://play.google.com/store/apps/details?id=com.faithin.app'>
          <div className='storeIcon'>
            <img src={appleIcon} alt='appstore' />
            <Button variant="light" size='sm' >  <span>Donwload on the</span> <br />
              App Store
            </Button>
          </div>
  </Link>*/}
      </div>
      <div data-aos="zoom-in-down">
        <h5>Become a Partner</h5>
        <p><Link className='footer-link' to='/register'>Dealer/Franchise </Link></p>
        <p><Link className='footer-link' to='/register'>Direct Selling Agent </Link></p>
        <p><Link className='footer-link' to='/register'>Growth Partner </Link></p>
        <p><Link className='footer-link' to='/register'>Recovery Agency/Agents </Link></p>
        <p><Link className='footer-link' to='/register'>Collection Agency/Agents </Link></p>
      </div>

    </div>
  );
};

export default Footer;
