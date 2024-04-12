import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

import userImage from './images/user.jpg';
import passwordImage from './images/password.jpg';
import logo from './logo.png';
import emailImage from './images/email.png';
import nameImage from './images/name.png';
import mobileImage from './images/mobile.png';
import addressImage from './images/address.jpg';

import './SignUp.css'; // Import your CSS file

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup Successful!"); // This is a placeholder for handling form submission
    // You can perform further actions here, like sending form data to a backend API
    // Example: axios.post('/api/signup', { fullName, userName, userEmail, userPassword })
    //   .then(response => {
    //     console.log(response.data);
    //      // Redirect to login page after successful signup
    //   })
    //   .catch(error => {
    //     console.error('Error during signup:', error);
    //   });
    navigate('/login');
  };
  
  return (
    <div className='signup-container' >
      <div className='signup-image-container'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='signup-content-container'>
        <div className='signup-form'>
          <div className='signup-header'>
            <div className='signup-text' align="center">SIGNUP</div>
          </div>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className='signup-inputs'>
              <div className='signup-input'>
                <input type="text" placeholder='Name' className='signup-input-field' style={{ backgroundImage: `url(${nameImage})` }} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <br></br>
              <div className='signup-input'>
                <input type="text" placeholder='Rollno' className='signup-input-field' style={{ backgroundImage: `url(${userImage})` }} onChange={(e) => setUserName(e.target.value)} />
              </div>
              <br></br>
              <div className='signup-input'>
                <input type="tel" placeholder='Mobile Number' className='signup-input-field' style={{ backgroundImage: `url(${mobileImage})` }} />
              </div>
              <br></br>
              <div className='signup-input'>
                <input type="email" placeholder='Email' className='signup-input-field' style={{ backgroundImage: `url(${emailImage})` }} onChange={(e) => setUserEmail(e.target.value)} />
              </div>
              <br></br>
              <div className='signup-input'>
                <input type="text" placeholder='Address' className='signup-input-field' style={{ backgroundImage: `url(${addressImage})` }} />
              </div>
              <br></br>
              <div className='signup-input'>
                <input type="password" placeholder='Password' className='signup-input-field' style={{ backgroundImage: `url(${passwordImage})` }} onChange={(e) => setUserPassword(e.target.value)} />
              </div>
              <br></br>
              <div className='signup-input'>
                <input type="password" placeholder='Confirm Password' className='signup-input-field' style={{ backgroundImage: `url(${passwordImage})` }} />
              </div>
            </div>
            <br></br>
            <div className='signup-submits'>
              <div className='signup-submit'>
                <button type="submit" className="signup-button"><b>SignUp</b></button>
              </div>
            </div>
          </form>
          <br></br>
          <div className='signup-login-text'>
            <p><b>Already have an account?</b> <Link to="/login" className="signup-login-link"><h4 color='black'>👉Login👈</h4></Link></p>
          </div>
        </div>
        <br></br>
        <div >
          <Link to="/" className="signup-back-link" align="center"><h4>Back to home👈</h4></Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
