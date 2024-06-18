/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import React, { useState, useEffect } from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';
import '../styles/Register.css';
import _ from 'lodash';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import app from '../Firebase_config';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../assets/logo/ic_app_text.png'

import registerImage from "../assets/images/loginImage.gif";
import axios from 'axios';
import { stateCityData } from './StateCityMapping';



const StepperForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isValid, setIsValid] = useState(false)
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [sendOtpEnabled, setSendOtpEnabled] = useState(true)
  const auth = getAuth(app);
  const [appVerifier, setAppVerifier] = useState(null);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({

    firstName: '',
    lastName: '',
    category: '',
    email: '',
    password: '',
    confirmedPassword: '',
    city:'',
    // oemName:'',
    userId: "string123",
    mobileNumber: null
  });

  const [dealerForm, setDealerForm] = useState({
    city: null,
    state: null, 
    dealerId: null,
    dealerOem: null
  })


  const [selectedCity, setSelectedCity] = useState();

  // const signIn = async () => {
  //   try {
  //     const result = await confirmationResult.confirm(verificationCode);
  //     console.log(result.user);
  //     setVerificationCode('');
  //     setConfirmationResult(null);
  //     setStep(2);
  //   } catch (error) {

  //   }
  // };

  const signIn = async () => {
    setSendOtpEnabled(false)
    try {
      const result = await confirmationResult.confirm(verificationCode);
      console.log(result.user);
      setVerificationCode('');
      setConfirmationResult(null);
      setStep(2);
    } catch (error) {

    }
    finally{
      setSendOtpEnabled(true)
    }
  };

  console.log("Formdata: ", formData)

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitBtnEnabled(false)
    try {
      var data = { ...formData};
      // console.log("data: ", formData, mobileNumber, selectedCity)
      const response = await fetch('https://finle-api-gateway.azurewebsites.net/auth-service/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("response data: ", responseData)

        if(formData.category === "DLR"){
          const cityLowerCase = _.toLower(_.replace(formData.city, /\s+/g, ''));
          const oemLowerCase = _.toLower(_.replace(dealerForm.dealerOem, /\s+/g, ''));
          const userId = responseData.responseData.userId
          const concatenatedVal = `${oemLowerCase}-${cityLowerCase}-${userId}`
          console.log("Concat val: ", concatenatedVal)
          setDealerForm(prev => {
            return {
              ...prev,
              city: formData.city,
              dealerId: responseData.responseData.userId,
              dealerOem: concatenatedVal
            }
          })
          const updateDealerUrl = "https://finle-admin-service.azurewebsites.net/admin-service/updateDealer"
  
          const res = await axios.post(updateDealerUrl, {
            dealerId: responseData.responseData.userId,
            state: dealerForm.state,
            city: formData.city,
            dealerOem: concatenatedVal,
            addressLineFirst: "",
            addressLineSecond: "",
            createdBy: "",
            createdDate: "",
            email: formData.email,
            firstName: formData.firstName,
            isActive: "Y",
            lastName: formData.lastName,
            lat: "",
            lng: "",
            mgrName: "",
            mobile: formData.mobileNumber,
            phone: "",
            pinCode: "",
            remarks: "",
            updatedBy: "",
            updatedDate: ""
          })
          console.log("Res update dealer: ", res)
        }


        alert('You have successfully registered!');
        console.log(responseData.message);
        // navigate("/consumer-profile");
      } else {
        setSubmitBtnEnabled(true)
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      console.log(data);
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again.');
      setSubmitBtnEnabled(true)
    }
  }


  // const sendotp = async (event) => {
  //   event.preventDefault();
  //   const phoneNumber = `+91${formData.mobileNumber}`;
  //   try{

  //     const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
  //   setConfirmationResult(confirmation);
  //   }catch(error){
  //     console.log("Error occured sending otp.", error)
  //   }
  // };

  const [submitBtnEnabled, setSubmitBtnEnabled] = useState(true)

  const sendotp = async (event) => {
    event.preventDefault();
    setSendOtpEnabled(false)
    console.log("Send otp called")
    const phoneNumber = `+${formData.mobileNumber}`;


    try {
      // const result = await confirmationResult.confirm(verificationCode);
      // console.log(result.user);
      const apiUrl = "https://finle-api-gateway.azurewebsites.net/auth-service/login";
      
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobileNumber: formData.mobileNumber,
            password: null,
            userId: null,
          }),
        });

        console.log("Login response: ", response)
        if (response.ok) {

          const responseData = await response.json();
          // const { userId, token } = responseData.responseData; 
          // localStorage.setItem("userId", userId); 
          // localStorage.setItem("token", token); 
          // alert("You have successfully logged in!");
          // navigate("/consumer-profile");
          alert("User already registered")
          setMobileNumber("");
          setVerificationCode("");
        } else {
          const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
          setConfirmationResult(confirmation);
          console.error(response.statusText);
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again.");
      }
      finally{
        setSendOtpEnabled(true)
      }
  };

  const handlePhoneChange = (value, country, e, formattedValue) => {
    // setMobileNumber(value);
    setFormData(prev => {
      return {
        ...prev,
        mobileNumber: value
      }
    })

    const phoneNumber = value.substring(country.dialCode.length); 
    setIsValid(phoneNumber.length === 10);
  };

  const handleChange = (event) => {
    
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setSelectedCity("")
    
  }
  const handleCityChange = (event) => {
    setFormData(prev => {
      return {
        ...prev,
        city: event.target.value,
      }
    })
    // setSelectedCity(event.target.value);
  };
  // console.log(formData);

   

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      size: 'normal',
      callback: () => {
      },
      'expired-callback': () => {
      }
    }, auth);
    setAppVerifier(recaptchaVerifier);
  }, [auth]);

  const renderStep1 = () => (
    <Form onSubmit={(e) => e.preventDefault()}>
      {/* <Form.Group controlId="formMobileNumber">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter mobile number"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={(e) => setFormData(prev => {
            return {
              ...prev,
              mobileNumber: e.target.value
            }
          })}
          required
        />
      </Form.Group> */}

      <Form.Group controlId="formMobileNumber">
        <Form.Label>Mobile Number</Form.Label>
        <PhoneInput
          country={'in'}
          value={formData.mobileNumber}
          onChange={(value, country, e, formattedValue) => handlePhoneChange(value, country, e, formattedValue)}
          inputStyle={{ width: '100%' }}
        />
        {!isValid && (
          <Form.Text className="text-danger">
            Phone number must be 10 digits long.
          </Form.Text>
        )}
      </Form.Group>

      <div id="recaptcha-container"></div>

      {confirmationResult && (
        <Form.Group controlId="verificationCode">
          <Form.Label>Verification Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
        </Form.Group>
      )}
      <div className='stepper-form-button'>
        {confirmationResult ? (
          <Button className='login-button' type="submit" onClick={signIn}>
            Verify OTP
          </Button>
        ) : (
          <>
            <Button className='login-button' onClick={sendotp}>
              Send OTP
            </Button>

          </>
        )}
      </div>

    </Form>
  );

  const handleStateChange = (e) => {
    setDealerForm(prev => {
      return {
        ...prev,
        state: e.target.value
      }
    });

    setFormData(prev => {
      return {
        ...prev,
        city: ""
      }
    })
    // setSelectedCity(""); // Reset city selection when state changes
  };


  const renderStep2 = () => (
    <Form onSubmit={(e) => e.preventDefault()}>

      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formUserType">
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          id="cat_gory"
        >
          <option value="">Select Category</option>
          <option value="CSR">Consumer</option>
          <option value="DLR">Dealer</option>
          <option value="DSA" >DSA</option>
          <option value="NBFC">NBFC</option>
          <option value="GP">Growth Partner</option>
          <option value="RAGT">Recovery Agency/Agents</option>
          <option value="CAGT">Collection Agency/Agents</option>
          <option value="STF">Staff</option>

        </Form.Control>

      </Form.Group>

      { formData.category ==="DLR" && (

        <>    
          <Form.Group>  
          <Form.Label>State</Form.Label>
          <Form.Control
            as="select"
            name="state"
            value={dealerForm.state}
            onChange={handleStateChange}
            required 
            
          >
            
          {Object.keys(stateCityData)?.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
      
            
            {/* <option value="">Select </option>
            <option value="indore">Indore </option>
            <option value="ujjain">Ujjain </option>
            <option value="bhopal">Bhopal</option>
            <option value="guna">Guna </option>
            <option value="dewas">Dewas </option>
            <option value="Raisen">Raisen </option>
            <option value="Bhind">Bhind </option>
            <option value="ShivpurI">Shivpuri </option>
            <option value="Damoh">Damoh </option>
            <option value="JABALPUR">Jabalpur </option>
            <option value="Sagar">Sagar </option>
            <option value="Rajgarh">Rajgarh </option>
            <option value="Vidisha">Vidisha </option>
            <option value="Mandala">Mandala </option>
            <option value="Balaghat">Balaghat </option>
            <option value="Sidhi">Sidhi </option> */}

          </Form.Control>
          </Form.Group>
          <Form.Group>  
          <Form.Label>City</Form.Label>
          <Form.Control
            as="select"
            name="city"
            value={formData.city}
            onChange={handleCityChange}
            required 
            
          >
            {stateCityData[dealerForm.state]?.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
            {/* <option value="">Select </option>
            <option value="indore">Indore </option>
            <option value="ujjain">Ujjain </option>
            <option value="bhopal">Bhopal</option>
            <option value="guna">Guna </option>
            <option value="dewas">Dewas </option>
            <option value="Raisen">Raisen </option>
            <option value="Bhind">Bhind </option>
            <option value="ShivpurI">Shivpuri </option>
            <option value="Damoh">Damoh </option>
            <option value="JABALPUR">Jabalpur </option>
            <option value="Sagar">Sagar </option>
            <option value="Rajgarh">Rajgarh </option>
            <option value="Vidisha">Vidisha </option>
            <option value="Mandala">Mandala </option>
            <option value="Balaghat">Balaghat </option>
            <option value="Sidhi">Sidhi </option> */}

          </Form.Control>
          </Form.Group>
    
    
          <Form.Group>  
          <Form.Label>OEM Name</Form.Label>
          <Form.Control
            as="select"
            name="oemName"
            value={dealerForm.dealerOem}
            onChange={(e) => setDealerForm(prev => {
              return {
                ...prev, 
                dealerOem: e.target.value
              }
            })}
            required
          >
            <option value="">Select </option>
            <option value="Yatri">Yatri</option>
            <option value="Republic Motors">Republic Motors</option>
          
          </Form.Control>
          </Form.Group>
    
    
          </>
       )
         
        }


      <div className='stepper-form-button'>
        <Button variant="secondary" onClick={() => setStep(1)}>
          Previous
        </Button>
        <Button variant="primary" onClick={() => setStep(3)}>
          Next
        </Button>
      </div>
    </Form>
  );
  const renderStep3 = () => (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmailId">
        <Form.Label>Email ID</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email ID"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
          required
        />
      </Form.Group>


      <Form.Group controlId="formPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Renter password"
          name="confirmedPassword"
          value={formData.confirmedPassword}
          onChange={handleChange}
          className="form-control"
          required
        />
      </Form.Group>



      <div className='stepper-form-button'>
        <Button variant="secondary" onClick={() => setStep(2)}>
          Previous
        </Button>
        <Button variant="primary" type="submit" disabled={!submitBtnEnabled}>
          Submit
        </Button>
      </div>
    </Form>
  );

  const renderProgressBar = () => (
    <ProgressBar now={step * 33.33} label={`${step}/3`} />
  );

  return (
    <div className="register-page">

      <div className="register">
      <div className="Login-form-title">
      <Link to="/">
        <img src={icon} alt="logo SVG" className='logo' />
      </Link>
      <h1> Welcome to FinLe Portal </h1>
      <p>Register to access your FinLe account</p>
    </div>
        <div className="register-body">

          <div className="login-image">
            <img src={registerImage} alt="register" style={{width:'100%'}} />
          </div>
          <div className="stepper-form-container">
            <div className="register-form-title">
              <h3>Register Now </h3>
            </div>
            {renderProgressBar()}
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}

            <p className="login-register">
             If you are already registered, please click here &nbsp;&nbsp;
              <Link to='/login'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepperForm;