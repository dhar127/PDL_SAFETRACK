import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import logo from './logo.png';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    alert(`User Login Successful!`);
  };

  const handleRecovery = () => {
    alert('Reach Us 📩contactus@gmail.com');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User Login Successful!");
    navigate('/main');
  };

  return (
    <div className='container'>
      <div className='image-container'>
      <img src={logo} alt="Logo" />
      </div>
      <div className='content-container'>
        <h1>Welcome Back!</h1>
        <h3>Login to Continue</h3>
        <div className='form'>
          <div className='header'>
            <div className='text'>LOGIN</div>
          </div>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className='inputs'>
              <div className='input'>
                <input type="text" placeholder='UserName' value={userName} onChange={(e) => setUserName(e.target.value)} className='input-field' />
              </div>
              <br></br>
              <div className='input'>
                <input type="password" placeholder='Password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} className='input-field' />
              </div>
            </div>
            <br></br>
            <div className='forgotpassword'><b>Forgot Password? 🤔 <span onClick={handleRecovery}>Click Here!</span></b></div>
            <br></br>
            <div className='remember-me'>
              <label htmlFor="remember"><b>Remember me</b></label>
              <input type="checkbox" id="remember" />
            </div>
            <div className='submits'>
              <div className='submit'>
                <button type="submit"><b>Login</b></button>
              </div>
            </div>
          </form>
          <br></br>
          <div className='signup-text'>
            <p><b>Don't have an account?</b><br /><br /><Link to="/signup" className="signup-button"><b>Sign Up</b></Link> </p>
          </div>
        </div>
        <br></br>
        <div >
          <Link to="/" className="signup-button" align="center">Back to home👈</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
