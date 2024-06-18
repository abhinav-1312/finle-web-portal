/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../styles/FeatureSection.css';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import slide1 from "../assets/logo/1.png"


const FreatureSection = () => {
  
    useEffect(()=>{
      AOS.init(
        {
          duration:"1000",
          delay:"300"
        }
      );
  },[])

  const images = {
    eligibility: require('../assets/images/eligibility_check.png'),
    calculate: require('../assets/images/calculate.png'),
    apply: require('../assets/images/apply.png'),
    test: require('../assets/images/test.png'),
    nearest_dealer: require('../assets/images/nearest_dealer.png'),
    partner: require('../assets/images/partner.png')
  };
  const cards = [
    { image: images.eligibility, title: "Check Loan Eligibility", link: '/loan-eligibility' },
    { image: images.calculate, title: "EMI Calculator", link: "/emi-calculator" },
    { image: images.apply, title: "Apply Loan", link: "/apply-loan" },
    // { image: images.test, title: "Psychometric Tests" },
    { image: images.nearest_dealer, title: "Nearest Dealer", link: "/branches" },
    // { image: images.partner, title: "Nearest Partner", link: "/branches" }
  ];

  // const banner_cards = [
  //   {
  //     title: 'Seamless Financial Management',
  //     description:
  //       'Our platform offers seamless financial management tools that empower you to track your expenses, create budgets, and achieve your financial goals.',
  //   },
  //   {
  //     title: 'Secure Transactions',
  //     description:
  //       'We prioritize the security of your financial transactions. Our platform utilizes state-of-the-art encryption technology to safeguard your sensitive information.',
  //   },
  //   {
  //     title: 'Personalized Recommendations',
  //     description:
  //       'Receive personalized financial recommendations tailored to your unique financial situation and goals. Make informed decisions to optimize your financial well-being.',
  //   },
  // ];


  return (
    <>
    <Container className='FeactureSection' >

      <div className='card_section ' data-aos="zoom-in-down">
        {cards.map(({ image, title, link }) => (
          <Card key={title} className="text-center card_body hover-class" >
            <Card.Body>
              <Card.Title><img className='card_icon' src={image} alt='icon' /></Card.Title>
              {link ? (
                <Link to={link}>
                  <Button className='card_button'>{title}</Button>
                </Link>
              ) : (
                <Button className='card_button'>{title}</Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
      </Container>


      <div className="sec-fec-banner"><img src={slide1} style={{width:"100%"}} data-aos="zoom-in-down" alt='error Address'/></div>

      <Container>
      <div className='feature_banner ' >
        <div className='banner' data-aos="zoom-in-down">
         <iframe className='banner-video hover-class' width="500" height="315" src="https://www.youtube.com/embed/FBjUQhjeBfk" title="RBI Kehta Hai - RAP Song" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          <Card className='hover-class cards ' data-aos="zoom-in-down">
            <Card.Body className='hover-class'>
              <Card.Title as="h1" className='banner_heading'>Get Instant Loan  . But
                without the hassle.</Card.Title>
              <Card.Text className='para-text'>
                Join FinLe in the journey towards a brighter and more sustainable future. We are here
                to support your electric rickshaw leasing and financing needs. Explore our services
                today to discover the financial solutions that are right for you.
              </Card.Text>
              <Button href='https://play.google.com/store/apps/details?id=com.dkglabs.e_savari' style={{ background: '#010438' }}>{"Learn more >>"}</Button>
            </Card.Body>
          </Card>
        </div>

        {/* <div className='banner_card'>
          {banner_cards.map(({ title, description }) => (
            <Card key={title} className='banner_card_body' >
              <Card.Body>
                <Card.Title className='banner_card_title'>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        */}
      </div>
      </Container>
  
</>
  )
}

export default FreatureSection