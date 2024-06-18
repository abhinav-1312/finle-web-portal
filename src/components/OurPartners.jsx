/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React, { useEffect } from 'react'
import Trontek from '../assets/partner/Trontek.png'
import Ipower from '../assets/partner/ipower.png'
import dkg_logo from '../assets/partner/dkg_logo.png'
import yc_logo_bg from '../assets/partner/yc_logo_bg.png'
import Azure from '../assets/logo/neuron.webp'
import fexprime from  "../assets/logo/fex_logo.png"
import sefali from "../assets/partner/sefali.jpeg"
// import Stripe from '../assets/partner/Stripe.png'
// import cinemax from '../assets/partner/cinemax.png'
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/Team.css';


const OurPartners = () => {
  useEffect(()=>{
    AOS.init(
      {
        duration:"700",
        delay:"300"
      }
    );
},[])
  return (
    <div className='OurPartners' data-aos="zoom-in-down">
      <h1>
        Our Partners
      </h1>
      <div className='partner_logo'>
        <img src={Trontek} alt='partner' />
        <img src={Ipower} alt='partner' />
        <img src={dkg_logo} alt='partner' />
        <img src={yc_logo_bg}  alt='partner' />     
        <img src={Azure} alt='partner' />
        <img src={fexprime} alt='partner' />
        <img src={sefali} alt='partner' />

          </div>
    </div>
  )
}

export default OurPartners