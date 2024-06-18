/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React from 'react';
import { Container} from 'react-bootstrap';
import NewsAndBlog from '../components/NewsBlog';
import "../styles/NewsBlog.css"
const NewsBlogPage = () => {
  

  return (
    <div className='head-news-blog'>
    <Container className='head-news-blog'>
     <NewsAndBlog/>
    </Container>
    </div>
  );
};

export default NewsBlogPage;
