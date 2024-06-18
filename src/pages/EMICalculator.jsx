/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Doughnut, Line } from "react-chartjs-2";
import '../styles/EMICalculator.css'
import Chart from 'chart.js/auto';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(150000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanLength, setLoanLength] = useState(18);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [yearlyInterest, setYearlyInterest] = useState([]);
  const [yearlyPrincipal, setYearlyPrincipal] = useState([]);
  const [years, setYears] = useState([]);
  const [pieChartValues, setPieChartValues] = useState({
    principal: loanAmount,
    interest: 0
  });

  function calculateLoanDetails(loan, rate, emi) {
    let totalInterest = 0;
    let yearlyInterest = [];
    let yearlyPrincipal = [];
    let years = [];
    let counter = 0;
    let principal = 0;
    let interests = 0;
    let loanAmount = loan;

    while (loanAmount > 0) {
      let interest = parseFloat(loanAmount) * parseFloat(rate);

      loanAmount = parseFloat(loanAmount) - (parseFloat(emi) - interest);
      totalInterest += interest;
      principal += parseFloat(emi) - interest;
      interests += interest;

      if (++counter === 12) {
        years.push(years.length + 1);
        yearlyInterest.push(parseInt(interests));
        yearlyPrincipal.push(parseInt(principal));
        counter = 0;
        principal = 0;
        interests = 0;
      }
    }

    setYearlyPrincipal(yearlyPrincipal);
    setYearlyInterest(yearlyInterest);
    setYears(years);

    return totalInterest;
  }

  useEffect(() => {
    const r = interestRate / 1200; // Monthly interest rate
    const n = loanLength ; // Total number of payments

    let numerator = loanAmount * r * (1 + r) ** n;
    let denominator = (1 + r) ** n - 1;

    const calculatedEMI = numerator / denominator;
    setMonthlyPayment(calculatedEMI.toFixed(2));

    const calculatedTotalInterest = calculateLoanDetails(
      loanAmount,
      r,
      calculatedEMI
    );
    setTotalInterest(calculatedTotalInterest.toFixed(2));

    let principal = loanAmount;
    setPieChartValues({
      principal: principal.toFixed(2),
      interest: calculatedTotalInterest.toFixed(2)
    });
  }, [loanAmount, interestRate, loanLength]);

  const handleLoanAmountChange = (event) => {
    setLoanAmount(parseFloat(event.target.value));
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(parseFloat(event.target.value));
  };

  const handleLoanLengthChange = (event) => {
    setLoanLength(parseFloat(event.target.value));
  };

  const lineChartData = {
    labels: years,
    datasets: [
      {
        type: "line",
        label: "Yearly Principal Paid",
        borderColor: "rgb(54, 162, 235)",
        data: yearlyPrincipal,
      },
      {
        type: "line",
        label: "Yearly Interest Paid",
        borderColor: "rgb(255, 99, 132)",
        data: yearlyInterest,
      },
    ],
  };

  const pieChartData = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        label: "Loan Amount",
        data: [pieChartValues.principal, pieChartValues.interest],
        backgroundColor: ["#010438", "#F37021"],
      },
    ],
  };

  const lineChartOptions = {
    scales: {
      yAxes: [{ ticks: { beginAtZero: true } }],
    },
  };

  return (
    <Container className="emi-container">
      <div className="emi-header">
        <h1 >Loan Calculator</h1>
      </div>
      <Row>
        <Col md={8}>
          <Form className="emi-body">
            <Form.Group controlId="loanAmountRange">
              <Form.Label>
                Amount <span style={{ color: "#6258A8" }}>₹{loanAmount}</span>
              </Form.Label>
              <Form.Control
                type="range"
                min="0"
                max="500000"
                step="5000"
                onChange={handleLoanAmountChange}
              />
            </Form.Group>
            <Form.Group controlId="loanLengthRange">
              <Form.Label>
                Length <span style={{ color: "#6258A8" }}>{loanLength} Tenure</span>
              </Form.Label>
              <Form.Control
                type="range"
                min="1"
                max="48"
                step="1"
                onChange={handleLoanLengthChange}
              />
            </Form.Group>
            <Form.Group controlId="interestRateRange">
              <Form.Label>
                % Interest <span style={{ color: "#6258A8" }}>{interestRate}%</span>
              </Form.Label>
              <Form.Control
                type="range"
                min="1"
                max="40"
                step="1"
                onChange={handleInterestRateChange}
              />
            </Form.Group>
          </Form>
          <br />
          
            <>
              <h5 className="emi-monthlyPayment">Monthly Payment : <span> ₹{monthlyPayment }</span> </h5>
              <br />
              <div className="emidetials">
                <div className='emi-principal'>
                  <h4 >Principal</h4>
                  <p >₹{loanAmount}</p>
                </div>
                <div className='emi-interest'>
                  <h4 >Total Interest</h4>
                  <p > ₹ {totalInterest}</p>
                </div>
                <div class='emi-payable'>
                  <h4 >Total Payable</h4>
                  <p >₹{(parseFloat(loanAmount) + parseFloat(totalInterest)).toFixed(2)}</p>
                </div>
              </div>
            </>
        
        </Col>
        <Col md={4}>
          <Doughnut data={pieChartData} />
        </Col>
      </Row>
    </Container>
  );
};

export default LoanCalculator;
