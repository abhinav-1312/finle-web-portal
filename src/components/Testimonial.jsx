/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import client1 from '../assets/images/client1.jpeg';
import client3 from '../assets/images/client3.jpeg';
import client2 from '../assets/images/client2.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Testimonial = () => {
  
  useEffect(()=>{
    AOS.init(
      {
        duration:"1000",
        delay:"300"
      }
    );
},[])
  return (
    <div className='Testimonial' data-aos="zoom-in-down">
      <h1>What our customers
        are saying</h1>
      <p className='testimonal_subheading' style={{color:"black"}}>
        At FinLe, we take pride in serving our valued customers and
        empowering rickshaw drivers and dealers to achieve their goals. But don't just take
        our word for it—here's what some of our customers have to say about their
        experiences with FinLe.
      </p>
      <Carousel >
        <Carousel.Item interval={3000} >
          <div className='Testimonial-slide testimonal-slide-main '>
            <img src={client1} alt='testimonial ' />
            <Card style={{ width: '28rem', border: "none" }}>
              <Card.Body className='testimonal-body' >
                <Card.Text>
                  यह finle मैंने उपयोग किया काफी टाइम बचत हुआ और एक दिन में rickshaw मिल गया। बेहतरीन
                  ऑफर और डिस्काउंट के साथ।
                </Card.Text>
                <Card.Text style={{ color: 'gold' }}>
                  ★★★★★
                </Card.Text>
                <Card.Subtitle className='testi-name'>राजू शर्मा</Card.Subtitle>
                {/*<Card.Text>
                  Bussiness Head
                </Card.Text>*/}
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className='Testimonial-slide testimonal-slide-main'>
            <img src={client3} alt='testimonial ' />
            <Card style={{ width: '28rem', border: "none" }}>
              <Card.Body className='testimonal-body'>
                <Card.Text>
                  मेरा नाम मोहित है  मैंने finle के बारे में दोस्तो से सुना  और फिर मैंने डाउनलोड किया और मुझे same
                  day rickshaw मिल गया।
                </Card.Text>
                <Card.Text style={{ color: 'gold' }}>
                  ★★★★
                </Card.Text>
                <Card.Subtitle className='testi-name'>मोहित</Card.Subtitle>
                {/*  <Card.Text>
                  Bussiness Head
              </Card.Text>*/}
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className='Testimonial-slide testimonal-slide-main'>
            <img src={client2} alt='testimonial ' />
            <Card style={{ width: '28rem', border: "none" }}>
              <Card.Body className='testimonal-body'>
                <Card.Text >
                  मैंने उपयोग किया मुझे अच्छा लगा मैं finle को 5 में से 5 रेटिगं करता हु।
                </Card.Text>
                <Card.Text style={{ color: 'gold' }}>
                  ★★★★★
                </Card.Text>
                <Card.Subtitle className='testi-name'> मनमोहन</Card.Subtitle>
                { /* <Card.Text>
                  Bussiness Head
            </Card.Text>*/}
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default Testimonial