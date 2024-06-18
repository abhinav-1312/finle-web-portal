import React from 'react'
import "../styles/Loan.css"
import fexlogo from "../assets/logo/fex_logo.png"
const Loan = () => {
  return (
    <div className='main-loan'>
      <h5 className='heading-t'>3W Loan Product Details</h5>
      <span className='doc-class'>Documents Required</span>
      <div >
       <ul>
        <li>KYC Documents: Aadhaar/ Passport/ Voter’s ID/Driving License/NREGA Job Card/Letter of National Population Register</li>
        <li>PAN Card</li>
        <li>Utility bill / Rent Agreement</li>
    
       </ul>
       <p>Note: The Company may seek any further additional information and documents from the applicant for processing the loan application.</p>
       
      </div>

      <div> 
         <h5 className='heading-t'>Eligibility</h5>

         <ul>
           <li>Resident of India</li>
           <li>Age: 21 – 55 Years</li>
           <li>Valid Driving License</li>
         </ul>
      </div>

      

       <div>
         <h5 className='heading-t'>Loan Amount</h5>
         <p>Up to 80% of the Vehicle Cost </p>

         <h5 className='heading-t'>Interest Rates</h5>
         <ul>
           <li>Flat* - 11.99% onwards</li>
           <li>Reducing Balance* - 22% onwards</li>
         </ul>
         <p>*Refer to our interest rate policy for more details
         </p>

         <h5 className='heading-t'>Loan Tenure</h5>
         <p>Up to 36 months</p>
       </div>

       <div> 
       
       <h5 className='heading-t'>Our Lending Partner </h5>
       <a href='https://www.fexprime.com/e-rickshaw' target='blank' >
       <h5>Fexprime Finance Pvt. Ltd</h5> 
       <br/>
      <img className='img-logo' alt="error" src={fexlogo} />
      </a>
       </div>
    </div>
  )
}

export default Loan
