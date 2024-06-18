/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import leaImg from '../assets/productImg/prd1.png';
import loanImg from '../assets/productImg/prd2.png';
// import product2 from '../assets/productImg/product2.jpeg';
// import product3 from '../assets/productImg/product3.png';
// import prcImg from "../assets/logo/Process Flow.png"
// import leaImg from "../assets/logo/LeaseImg.png"
// import loanImg from "../assets/logo/LoanImg.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Products = () => {
  useEffect(()=>{
    AOS.init(
      {
        duration:"1000",
        delay:"300"
      }
    );
  },[])
  return (
    <div className='products' data-aos="zoom-in-down">
      <h1 >Products</h1>
      <div className='products_card'>
   {/*     <Card className='product_card_div hover-class' data-aos="zoom-in-down">
          <Card.Img style={{ height: '300px' , width:"100%", }} variant="top" src={leaImg} />
          <Card.Body>
            <Card.Title className='cart-head cart-text'>3 Wheeler Loan </Card.Title>
            <Card.Text className='products_body'>
           {/* Your Key to Eco-Friendly Mobility. We provide seamless leasing options for electric
            rickshaws,convenient and cost-effective path to cleaner urban
            transportation. Make the switch to sustainability with FinLease.
       
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='product_card_div hover-class' data-aos="zoom-in-down">
          <Card.Img style={{ height: '300px', width:"100%", }} variant="top" src={loanImg} />
          <Card.Body>
            <Card.Title className='cart-head'>3 Wheeler Lease</Card.Title>
            <Card.Text className='products_body'>
           {/* Your Financial Partner on the Road. We offer swift and stress-free financing
            solutions for rickshaw drivers. Experience the ease of access to funds and drive your
            business toward success with FinLe Loans.  
        
            </Card.Text>
          </Card.Body>

        </Card>
*/}

      {/*  // <Card className='product_card_div'>
        //   <Card.Img style={{ height: '200px' }} variant="top" src={product2} />
        //   <Card.Body>
        //     <Card.Title>Seamless 3-Wheeler Lease Options</Card.Title>
        //     <Card.Text className='products_body' >
        //     Bridge to Electric Rickshaw Ownership. With our hassle-free leasing options,
        //     enjoy the benefits of electric rickshaws without the burden of ownership. Drive
        //     into a cleaner, more profitable future with FinLease.              <span>Read more...</span>
        //     </Card.Text>
        //     <Card.Subtitle className="mb-2 text-muted">15 Oct, 2023</Card.Subtitle>
        //   </Card.Body>
        // </Card>
        // <Card className='product_card_div'>
        //   <Card.Img  style={{ height: '200px' }} variant="top" src={product3} />
        //   <Card.Body>
        //     <Card.Title>Secure Your 3-Wheeler with a Hassle-Free Loan</Card.Title>
        //     <Card.Text className='products_body' >
        //     Empower Your Business with FinLe Loans. Our lending solutions provide rickshaw
        //     drivers with the capital they need for growth. Say goodbye to financial worries and
        //     hello to a brighter, more prosperous future with FinLe Loans.              <span>Read more...</span>
        //     </Card.Text>
        //     <Card.Subtitle className="mb-2 text-muted">03 Sep, 2023</Card.Subtitle>
        //   </Card.Body>
        // </Card>
  */}
      </div>
     {/* <div className='product-name'>
       <h5>3 Wheeler Lease</h5>

       <h5>3 Wheeler Loan</h5>
      </div>
*/}
   
<div className='product-section-main'>
  <div className='prd-img-div'><img className='prd-img' alt='Wrong path' src={loanImg}/>
     <div className='prd-text'>3 Wheeler Lease</div>
  </div>
  <div className='prd-img-div'><img alt='Wrong path' className='prd-img' src={leaImg}/>
    <div className='prd-text'>3 Wheeler Loan</div>

  </div>

</div>

    </div>
  );
}

export default Products;
