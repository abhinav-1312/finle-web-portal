/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */


import React, { useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import "../App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqData = [
  {
    question: 'What is FinLe?',
    answer: (
      <span>
        FinLe is a financial services platform specializing in electric rickshaw leasing and financing.We connect electric rickshaw operators, dealers, and individuals with the right solutions to acquire, finance, and grow their electric rickshaw fleets.
      </span>
    )
  },
  {
    question: 'How can I apply for a loan to purchase an electric rickshaw?',
    answer: (
      <span>
        Applying for a loan is easy. Simply download the application -{' '}
        <Link to='https://play.google.com/store/apps/details?id=com.dkglabs.e_savari'>
          Finale from Google Play Store
        </Link>{' '}
        or <Link to='/support'>contact</Link> , and our team will guide you through the application process.
      </span>
    ),
  },
  {
    question: 'What are the benefits of leasing electric rickshaws through FinLe?',
    answer: 'Leasing through FinLe allows you to expand your electric rickshaw fleet without a large upfront investment. Our leasing options are designed to be flexible and cost-effective.'
  },
  {
    question: 'How do you help NBFCs, banks, and dealers get customers?',
    answer: 'We partner with financial institutions and electric rickshaw dealers to connect them with potential customers in need of financing. Our platform acts as a bridge, facilitating these  connections and driving business growth for all parties involved. For rickshaw dealers, our streamlined processes ensure money is disbursed rapidly, allowing them to expand their inventory quickly..'
  },
  {
    question: 'What types of loans do you offer?',
    answer: (<span>
      We offer a range of loans tailored to the electric rickshaw industry, including loans for fleet expansion, individual rickshaw purchases, and more.Please <Link to='/support'>contact</Link>  for specific   loan options.
    </span>)
  },
  {
    question: 'Are your loans quick and easy to obtain?',
    answer: ':Yes, we understand the importance of timely financial solutions. We offer a streamlined loan application process to ensure quick approvals and disbursements.'
  },
  {
    question: 'Do you have any sustainability initiatives?',
    answer: 'Yes, we are committed to promoting sustainable mobility through electric rickshaws. By supporting this eco-friendly mode of transportation, we contribute to a cleaner and greener future.'
  },
  {
    question: 'How can I get in touch with your customer support team?',
    answer: (<span>
      You can reach our customer support team by phone at 18000000000 or via email at info@finle.com. You can also visit our <Link to='/support'>support</Link>  page for more options.'
    </span>)
  },
  {
    question: 'What is your data protection policy?',
    answer: 'We take data protection seriously. Please visit our [Privacy Policy](/privacy-policy) page for details on how we handle and protect your personal information.'
  },
  {
    question: 'Can I subscribe to your newsletter?',
    answer: 'Absolutely! You can subscribe to our newsletter for the latest news, tips, and exclusive offers. '
  },
  {
    question: "We hope these answers have been helpful. If you have more questions or need further  assistance, please don't hesitate to [contact us](/contact). Our team is here to support you in your journey towards electric rickshaw leasing and financing.",
    answer: ''
  }
];

const FAQ = () => {
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
    <div className='FAQ' data-aos="zoom-in-down">
      <h1>Frequently Asked Questions</h1>
      <Accordion className='faqbody' defaultActiveKey="0">
        {faqData.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header  > <p className='Faq-qu'> {item.question}</p></Accordion.Header>
            <Accordion.Body className='Faq-ans'> <p> {item.answer}</p></Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
