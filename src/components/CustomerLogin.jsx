import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerLogin.css';
import user_icon from '../components/Assets/person.png';
import email_icon from '../components/Assets/email.png';
import password_icon from '../components/Assets/password.png';
import eye_icon from '../components/Assets/view.png';
import eyeSlash_icon from '../components/Assets/hide.png';

const CustomerLogin = () => {
  const [action, setAction] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    if (action === 'Login' && email === 'Admin' && password === 'admin@123') {
      setLoginMessage('Login successful!');
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setLoginMessage('');
        navigate('/Customer_Choice');
      }, 2000);
    } else if (action === 'Register' && email && password) {
      setLoginMessage('Registration successful!');
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setLoginMessage('');
      }, 2000);
    } else {
      setLoginMessage('Incorrect email or password. Please try again.');
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setLoginMessage('');
      }, 2000);
    }
  };

  const closePopup = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email Id"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            src={showPassword ? eyeSlash_icon : eye_icon}
            alt="Toggle Password"
            className="small-icon"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={showConfirmPassword ? eyeSlash_icon : eye_icon}
              alt="Toggle Confirm Password"
              className="small-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
        )}
      </div>
      {action === 'Register' ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password?<span id="forgot-password-link">Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={() => {
            handleLogin();
          }}
        >
          {action}
        </div>
        <div
          className={action === 'Register' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction(action === 'Login' ? 'Register' : 'Login');
            setLoginMessage('');
            setShowModal(false); // Clear previous login message when switching between Login and Register
          }}
        >
          {action === 'Login' ? 'Register' : 'Login'}
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <p>{loginMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerLogin;