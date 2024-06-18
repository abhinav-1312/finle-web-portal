/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import '../styles/NewsBlog.css';

const BlogPage = ({ blogData }) => {
  const { blogId } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(blogId));

  if (!blog) {
    return (
      <Container className="mt-5">
        <h3>Blog not found</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-5 mb-2">
      <Card className="blog-card-unique">
        <Card.Img style={{width:'100%',height:'500px',alignSelf:'center'}} variant="top" src={blog.image} className="blog-image-unique" />
        <Card.Body>
          <Card.Title className="blog-title-unique">{blog.title}</Card.Title>
          <Card.Text >{blog.description}</Card.Text>
          <Card.Text>
            <small className="text-muted blog-date-unique">{blog.date}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogPage;

