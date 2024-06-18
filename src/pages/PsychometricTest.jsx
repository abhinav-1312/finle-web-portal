/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PsychometricTest = () => {

  const [answers, setAnswers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(answers);
  };

  const handleAnswerChange = (event, questionNumber) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionNumber] = event.target.value;
    setAnswers(updatedAnswers);
  };

  const questions = [
    {
      id: 1,
      question: 'I enjoy socializing with large groups of people.',
      options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree']
    },
    {
      id: 2,
      question: 'I am very organized and like to plan ahead.',
      options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree']
    },
    {
      id: 3,
      question: 'I like to take risks and try new things.',
      options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree']
    },
    {
      id: 4,
      question: 'I am good at understanding other people’s feelings.',
      options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree']
    },
    {
      id: 5,
      question: 'I am a creative person and enjoy artistic activities.',
      options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree']
    },
  ];

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Psychometric Test</h1>
      <Form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <Form.Group key={question.id} controlId={`question${question.id}`}>
            <Row>
              <Col md={8} className="mb-3">
                <Form.Label>{question.question}</Form.Label>
              </Col>
              <Col md={4}>
                <Form.Control
                  as="select"
                  value={answers[question.id]}
                  onChange={(event) => handleAnswerChange(event, question.id)}
                >
                  <option value="">Select answer</option>
                  {question.options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
        ))}
        <div className="text-center">
          <Button variant="primary" type="submit">Submit</Button>
        </div>
      </Form>
    </Container>
  );
};

export default PsychometricTest;
