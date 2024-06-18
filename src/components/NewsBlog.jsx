/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */


import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/NewsBlog.css';
import partner1 from "../assets/partner/partner1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const NewsAndBlog = () => {
  useEffect(()=>{
    AOS.init(
      {
        duration:"700",
        delay:"300"
      }
    );
},[])
  const newsData = [
    {
      id: 1,
      title: 'FinLe partners with FexPrime!',
      description: 'FinLe partners with FexPrime Finance to revolutionize e-rickshaw financing, enhancing financial accessibility and growth for e-rickshaw owners and drivers. Transforming the future of e-rickshaw financing together!',
      image: partner1,
      date: 'May 13, 2024'
    },
    {
      id: 2,
      title: 'New fintech product launched!',
      description: 'We are excited to announce the launch of our latest fintech product, designed to help you manage your finances more efficiently. Try it out today!',
      image: 'https://i.pinimg.com/564x/60/8a/19/608a196f34a244cfbf86a74a2549f902.jpg',
      date: 'May 13, 2023'
    },

    {
      id: 3,
      title: 'Expert insights on the future of fintech',
      description: 'We recently spoke with industry experts to get their take on the future of fintech. Read on to learn more about their predictions and what they mean for you.',
      image: 'https://i.pinimg.com/564x/ac/ee/64/acee64c8aa0c9e3c2481904a812d8d69.jpg',
      date: 'May 12, 2023'
    },
    // {
    //   id: 4,
    //   title: 'How to protect  from cyber threats',
    //   description: 'In today\'s digital age, it\'s more important than ever to protect your finances from cyber threats. Check out our latest blog post for tips on how to stay safe.',
    //   image: 'https://i.pinimg.com/736x/cd/45/2e/cd452efc1cafe7c3d9eaca4ecf0ce375.jpg',
    //   date: 'May 11, 2023'
    // },

    
  ];

  const blogData = [
    {
      id: 1,
      title: 'AI and ML: The Game-Changers in NBFC',
      description: 'In the rapidly evolving landscape of financial services, Non-Banking Financial Companies (NBFCs) have been embracing cutting-edge technologies to enhance their underwriting practices. Among these, Artificial Intelligence (AI) and Machine Learning (ML) have emerged as game-changers, revolutionizing the way NBFCs assess creditworthiness and manage risk.',
      image: 'https://i.pinimg.com/564x/e5/ca/58/e5ca58badb7915a5f9030eefd6c0d12b.jpg',
      date: 'May 15, 2023',
    },
    {
      id: 2,
      title: 'Financing Electric Dreams: How Our ',
      description: 'The world of rickshaws is rapidly evolving, and electric rickshaws have taken the front seat. However, transitioning to electric vehicles can be a daunting task for rickshaw drivers, often hindered by financial barriers. This is where FinLe steps in, empowering these drivers to realize their electric dreams.',
      image: 'https://i.pinimg.com/564x/39/ae/cb/39aecb139832cbeb98d0f153e60ff990.jpg',
      date: 'May 14, 2023',
    },
    {
      id: 3,
      title: 'The Road to Entrepreneurship: ',
      description: "The electric rickshaw industry is thriving, and those who recognize the potential are seizing the opportunity to become electric rickshaw dealers. If you're considering a foray into this business, you're in the right place. Here's why becoming an electric rickshaw dealer is a smart move.",
      image: 'https://i.pinimg.com/564x/5e/1f/90/5e1f90c1a935f7010510b6e2f52dc231.jpg',
      date: 'May 13, 2023',
    },
  ];


  const renderNewsList = () => {
    return newsData.map((news) => (
      <Card key={news.id} className="mb-3 news-card-unique" data-aos="zoom-in-down">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Card.Img variant="top" src={news.image} className="news-image-unique" />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title className="news-title-unique" >{news.title}</Card.Title>
              <Card.Text className="news-description-unique" >{news.description}</Card.Text>
              <Card.Text>
                <small className=" news-date-unique" >{news.date}</small>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    ));
  };


  const renderBlogList = () => {
    return blogData.map((blog) => (
      // <Link style={{ textDecoration: "none !important" }} key={blog.id} to={`/blog/${blog.id}`}>
        <Card key={blog.id} className="mb-3 blog-card-unique" data-aos="zoom-in-down">
          <div className="row no-gutters">
            <div className="col-md-4">
              <Card.Img variant="top" src={blog.image} className="blog-image-unique" />
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title className="blog-title-unique" >{blog.title}</Card.Title>
                <Card.Text className="blog-description-unique" >{blog.description}</Card.Text>
                <Card.Text>
                  <small className=" blog-date-unique" >{blog.date}</small>
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      // </Link>
    ));
  };

  return (
    <div className='newsandblogdiv'>
    <Container className=''>
      <Row>
        <Col md={6}>
          <div data-aos="zoom-in-down" className="d-flex justify-content-between align-items-center mb-3 mt-5">
            <h4 className="news-heading-unique" >News</h4>
            <Link to={"/news&blog"}>
              <Button style={{ background: '#006687' }} className="news-see-all-unique" >See all</Button>
            </Link>
          </div>
          <hr className="mb-3" />
          {renderNewsList()}
        </Col>
        <Col md={6}>
          <div data-aos="zoom-in-down" className="d-flex justify-content-between align-items-center mb-3 mt-5">
            <h4 className="blog-heading-unique" >Blog</h4>
            <Link to={"/news&blog"}>
              <Button style={{ background: '' }} className="blog-see-all-unique" >See all</Button>
            </Link>
          </div>
          <hr className="mb-3" />
          {renderBlogList()}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default NewsAndBlog;
