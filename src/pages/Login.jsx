/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */


import React, { useState, useEffect } from "react";
import { Form, Button, Tabs, Tab } from "react-bootstrap";
import { signInWithPhoneNumber, getAuth, RecaptchaVerifier } from "firebase/auth";
import app from "../Firebase_config";
import "../styles/Login.css";
import loginImage from "../assets/images/loginImage.gif";
import { Link, useNavigate } from "react-router-dom";
import icon from '../assets/logo/ic_app_text.png'
import PhoneInput from "react-phone-input-2";

function LoginForm() {
  const [loginOption, setLoginOption] = useState("mobile");
  const [mobileNumber, setMobileNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [appVerifier, setAppVerifier] = useState(null);
  const [auth, setAuth] = useState(null);
  const [resendTimer, setResendTimer] = useState(0);
  const [resendDisabled, setResendDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authObj = getAuth(app);
    const recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
      size: "normal",
      callback: () => { },
      "expired-callback": () => { },
    }, authObj);
    setAppVerifier(recaptchaVerifier);
    setAuth(authObj);
  }, []);

  const startResendTimer = () => {
    setResendTimer(60);
    setResendDisabled(true); 
  };

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearTimeout(timer); 
    } else {
      setResendDisabled(false); 
    }
  }, [resendTimer]);

  async function sendOTP(event) {
    event.preventDefault();
  
    const phoneNumber = `+${mobileNumber}`;
    const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    setConfirmationResult(confirmation);
    startResendTimer(); 
  }

  async function verifyOTP(event) {
    event.preventDefault();
    try {
      const result = await confirmationResult.confirm(verificationCode);
      console.log(result.user);
      const apiUrl = "https://finle-api-gateway.azurewebsites.net/auth-service/login";
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobileNumber,
            password: null,
            userId: null,
          }),
        });
        if (response.ok) {
          const responseData = await response.json();
          const { userId, token } = responseData.responseData; 
          localStorage.setItem("userId", userId); 
          localStorage.setItem("token", token); 
          alert("You have successfully logged in!");
          navigate("/consumer-profile"); 
        } else {
          alert("Login failed. Please try again.");
          console.error(response.statusText);
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again.");
      }
      setMobileNumber("");
      setVerificationCode("");
      setConfirmationResult(null);
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  }

  const [isValid, setIsValid] = useState(true)

  const handlePhoneChange = (value, country, e, formattedValue) => {
    setMobileNumber(value);
    // Extract the phone number after the country code

    const phoneNumber = value.substring(country.dialCode.length); 
    console.log(phoneNumber.length)
    setIsValid(phoneNumber.length === 10);
  };

  async function handleLogin(event) {
    event.preventDefault();
    if (loginOption === "mobile") {
      if (confirmationResult) {
        verifyOTP(event);
      } else {
        sendOTP(event);
      }
    } else {
      const apiUrl = "https://finle-api-gateway.azurewebsites.net/auth-service/login";
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobileNumber: null,
            password,
            userId,
          }),
        });
        if (response.ok) {
          const responseData = await response.json();
          const { userId, token } = responseData.responseData; 
          localStorage.setItem("userId", userId); 
          localStorage.setItem("token", token); 
          alert("You have successfully logged in!");
          navigate("/consumer-profile"); 
        } else {
          alert("Login failed. Please try again.");
          console.error(response.statusText);
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again.");
      }
    }
  }

  return (
    <div className="LoginPage">
      <div className="Login">
        <div className="Login-form-title">
          <Link to="/">
            <img src={icon} alt="logo SVG" className='logo' />
          </Link>
          <h1> Welcome to FinLe Portal </h1>
          <p>Login to access your FinLe account</p>
        </div>
        <div className="LoginPageBody">
          <div className="login-image">
            <img src={loginImage} alt="Login" style={{width:'100%'}} />
          </div>
          <div className="Login-form">
            <div className="Login-form-title">
              <h3>Login</h3>
            </div>
            <Tabs defaultActiveKey="mobile" onSelect={(k) => setLoginOption(k)} className="Login-tabs" fill>
              <Tab eventKey="mobile" title="Mobile No.">
                <Form className="login-mobile-otp" onSubmit={handleLogin}>
                  {/* <Form.Group controlId="formMobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter mobile number"
                      name="mobileNumber"
                      required
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </Form.Group> */}

<Form.Group controlId="formMobileNumber">
        <Form.Label>Mobile Number</Form.Label>
        <PhoneInput
          country={'in'}
          value={mobileNumber}
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
                      <Form.Label>Enter OTP</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter verification code"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                      />
                    </Form.Group>
                  )}
                  {confirmationResult && (
                    <div>
                      <p>{`Resend OTP in ${resendTimer} seconds`}</p>
                      <Button
                        className="resend-button"
                        variant="primary"
                        disabled={resendDisabled}
                        onClick={(e) => sendOTP(e)}
                      >
                        Resend OTP
                      </Button>
                    </div>
                  )}

                  <Button className="login-button" variant="primary" type="submit">
                    {confirmationResult ? "Verify OTP" : "Send OTP"}
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="userId" title="User Id">
                <Form className="login-userid" onSubmit={handleLogin}>
                  <Form.Group controlId="formUserId">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter user ID"
                      name="userId"
                      required
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button className="login-button" variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Tab>
            </Tabs>
            {/*   <p className="login-forget">
              <Link to="/forget-password">Forget User ID / Password</Link>
                  </p>*/}
            <p className="login-register">
              If You Are Not Register Click here &nbsp; &nbsp;
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
