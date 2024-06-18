/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */


import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/BestOffers.css';

const BestOffers = () => {
  const items = [
    {
      src: 'https://img.freepik.com/free-photo/front-view-two-stacks-coins-with-jar-plants_23-2148803919.jpg?size=626&ext=jpg&ga=GA1.1.482359161.1684154306&semt=sph',
      title: 'Unlock the Road to Freedom with FinLe Lease!',
      description: 'Drive an electric rickshaw hassle-free! Embrace eco-friendly mobility with our flexible leasing solutions.',
      date: 'Offer ends on Dec 30, 2023',
    },
    {
      src: 'https://img.freepik.com/premium-photo/man-hand-coins-with-piggy-bank-desk_218381-14094.jpg?w=1380',
      title: " Ride the Future with FinLe's Electric Rickshaw Leasing!",
      description: "Easy, Affordable, and Planet-Friendly. Your ticket to a sustainable urban commute!",
      date: 'Limited time offer',
    },
    {
      src: 'https://www.loanstudio.in/client-assets/img/slider/Online%20or%20Offline.jpg',
      title: 'Lease the Change with FinLe!',
      description: 'Empowering rickshaw drivers with accessible leasing options. Join the electric revolution today!',
      date: 'No expiration date',
    },
  ];


  return (
    <div className="best-offers-slider-container">
      <div>
        <Carousel
          className="best-offers-slider"
          controls={true}
          indicators={false}
          interval={3000}
          pause={false}
        >
          {items.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.src}
                alt={`Slide ${index + 1}`}
              />
              <Carousel.Caption>
                <h3 className='slider_offer_title'>{item.title}</h3>
                <p className='slider_offer_description'>{item.description}</p>
                <p>{item.date}</p>
                <Link to={'/products'}>
                  <button>
                    Learn More
                  </button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BestOffers;
