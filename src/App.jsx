/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstNavbar from './components/FirstNavbar';
import HeroSection from './components/HeroSection';
import SecondNavbar from './components/SecondNavbar';
import FreatureSection from './components/FreatureSection';
import Products from './components/ProductSection';
// import BestOffers from './components/BestOffers';
import Testimonial from './components/Testimonial';
import Team from './components/Team';
import OurPartners from './components/OurPartners';
import NewsBlog from './components/NewsBlog';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import blogData from './json/blogData';
import ApplyLoan from './pages/ApplyLoan';
import NBFCPage from './pages/NBFCPage';
import EMICalculator from './pages/EMICalculator';
import PsychometricTest from './pages/PsychometricTest';
import RegisterNBFC from './pages/RegisterNbfc';
import UserPage from './pages/ConsumerPage';
import ProductPage from './pages/ProductPage';
import AboutUs from './pages/AboutUsPage';
import BusinessLoan from './pages/BusinessLoan';
import DealerPage from './pages/DealerPage';
import NewsBlogPage from './pages/NewsBlogPage';
import SupportPage from './pages/SupportPage';
import Login from './pages/Login';
import Register from './pages/Register';
import DealerRegister from './pages/DealerRegister';
import LoanEligibility from './pages/LoanEligibility';
import Branches from './pages/OurBranches';
import  PrivacyPolicy  from './pages/PrivacyPolicy';
import BlogPage from './pages/BlogPage';
import Loan from './pages/Loan';
import Termcondition from './pages/Termcondition';


function App() {

  function Home() {
    return (
      <React.Fragment>

    {/*
     <BestOffers />
    */}
        <HeroSection />
        <FreatureSection />
        <Products />
        <Testimonial />
        <Team />
        <OurPartners />
        <NewsBlog />
        <FAQ />
        <ContactUs />

      </React.Fragment>
    );
  }

  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<><FirstNavbar /><SecondNavbar /><Home /><Footer /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/apply-loan" element={<><FirstNavbar /><SecondNavbar /><ApplyLoan /><Footer /></>} />
          <Route path="/nbfc" element={<><FirstNavbar /><SecondNavbar /><NBFCPage /><Footer /></>} />
          <Route path="/emi-calculator" element={<><FirstNavbar /><SecondNavbar /><EMICalculator /><Footer /></>} />
          <Route path="/psychometric-test" element={<><FirstNavbar /><SecondNavbar /><PsychometricTest /><Footer /></>} />
          <Route path="/register-nbfc" element={<><FirstNavbar /><SecondNavbar /><RegisterNBFC /><Footer /></>} />
          <Route path="/consumer-profile" element={<UserPage />} />
          <Route path="/products" element={<><FirstNavbar /><SecondNavbar /><ProductPage /><Footer /></>} />
               <Route path="/products" element={<><FirstNavbar /><SecondNavbar /><ProductPage /><Footer /></>} />
               <Route path="/loan" element={<><FirstNavbar /><SecondNavbar /><Loan /><Footer /></>} />

            
          <Route path='/about' element={<><FirstNavbar /><SecondNavbar /><AboutUs /><Footer /></>} />
          <Route path='/business-loan' element={<><FirstNavbar /><SecondNavbar /><BusinessLoan /><Footer /> </>} />
          <Route path='/news&blog' element={<><FirstNavbar /><SecondNavbar /><NewsBlogPage /><Footer /></>} />
          <Route path='/register-type' element={<><FirstNavbar /><SecondNavbar /><DealerRegister /><Footer /></>} />
          <Route path='/dealer' element={<><FirstNavbar /><SecondNavbar /><DealerPage /><Footer /></>} />
          <Route path='/support' element={<><FirstNavbar /><SecondNavbar /><SupportPage /><Footer /></>} />
          <Route path='/privacy-policy' element={<><FirstNavbar /><SecondNavbar /><PrivacyPolicy /><Footer /></>} />
          <Route path='/loan-eligibility' element={<><FirstNavbar /><SecondNavbar /><LoanEligibility /><Footer /></>} />
          <Route path='/branches' element={<><FirstNavbar /><SecondNavbar /><Branches /><Footer /></>} />
          <Route path="/blog/:blogId" element={<><FirstNavbar /><SecondNavbar /><BlogPage blogData={blogData}/><Footer /></>} />
          <Route path='/faq' element={<><FirstNavbar /><SecondNavbar /><FAQ /><Footer /></>} />
          <Route path='/term' element={<><FirstNavbar /><SecondNavbar /><Termcondition /><Footer /></>} />

        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
