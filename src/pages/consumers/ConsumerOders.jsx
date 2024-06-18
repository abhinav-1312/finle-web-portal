/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React from 'react';
import { Container, Table } from 'react-bootstrap';

const ConsumerOderes = () => {
  return (
    <Container>
      <h1>My Orders</h1>
      <p>Here you can view your order history and track your current orders.</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Order Date</th>
            <th>Delivery Date</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>Product A</td>
            <td>01/01/2023</td>
            <td>01/15/2023</td>
            <td>Processing</td>
          </tr>
          <tr>
            <td>23456</td>
            <td>Product B</td>
            <td>02/01/2023</td>
            <td>02/15/2023</td>
            <td>Shipped</td>
          </tr>
          <tr>
            <td>34567</td>
            <td>Product C</td>
            <td>03/01/2023</td>
            <td>03/15/2023</td>
            <td>Delivered</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ConsumerOderes;
