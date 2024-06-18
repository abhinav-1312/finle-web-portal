/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */


/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Phone from '../assets/images/cust_app.png'
import '../styles/HeroSection.css';
import { Container } from 'react-bootstrap';
import slide1 from "../assets/logo/1.png"
import slide2 from "../assets/logo/2.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {

  useEffect(()=>{
    AOS.init(
      {
        duration:"1000",
        delay:"300"
      }
    );
},[])

  return (

    <div >
    <div style={{width:"100%"}}><img src={slide2} style={{width:"100%"}} alt='error' data-aos="zoom-in-down" /></div>
  {/*  <section id="Herosection">

      <Container data-aos="zoom-in-down">
        <div>
          <div className='Heroheading'>
            <h1>
            Hassle Free Leasing, Zero Fee to Pay.
            </h1>
            <h4 style={{width:'80%'}}> At FinLe, we specialise in empowering the electric rickshaw industry through our
            innovative financial solutions. Our mission is to drive sustainable mobility and
            economic growth by providing seamless access to electric rickshaw leasing and
            loans.</h4>
          </div>

          <div className='herobody'>
            <div className='herocardline' >
              <div className='heroCardBody'>
                <div className='herocard herocardone hover-class'>
                  <h4>Easy and Quick Loans</h4>
                  <p> We understand the importance of timely financial solutions. Our
                    streamlined loan application process ensures that you can get the funds you need without delay.</p>
                </div>
                <div className='heroLine heroLineOne'></div>
              </div>
              <div className='heroCardBody'>
                <div className='herocard herocardtwo hover-class'>
                  <h4>Industry Expertise</h4>
                  <p>With a deep understanding of the electric rickshaw sector, we are
                    well-equipped to provide tailored financial services that cater to your specific needs.</p>
                </div>
                <div className='heroLine heroLinetwo'></div>
              </div>
              <div className='heroCardBody'>
                <div className='herocard herocardthree hover-class'>
                  <h4>Network of Partners</h4>
                  <p>We have cultivated strong relationships with NBFCs, banks, and
                    dealers, allowing us to connect you with the right partners for your goals.</p>
                </div>
                <div className='heroLine heroLinethree'></div>
              </div>
            </div>

            <div>
              <img className="imgdiv" src={Phone} alt="iphone-mockup" />
            </div>
          </div>

        </div>
        </Container >
        </section >
  */}

      </div>
  )
}

export default HeroSection