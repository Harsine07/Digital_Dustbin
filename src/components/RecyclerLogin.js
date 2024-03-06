import React, { useState } from 'react';
import email_icon from '../components/Assets/email.png';
import password_icon from '../components/Assets/password.png';
//import eye_open from '../components/Assets/view.png';
//import eye_close from '../components/Assets/hide.png';
import './RecyclerLogin.css';

const RecyclerLogin = () => {
  const [isAdminLogin, setIsAdminLogin] = useState(true);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [recyclerEmail, setRecyclerEmail] = useState('');
  const [recyclerPassword, setRecyclerPassword] = useState('');

  const toggleLogin = (isAdmin) => {
    setIsAdminLogin(isAdmin);
  };

  const handleAdminEmailChange = (event) => {
    setAdminEmail(event.target.value);
  };

  const handleAdminPasswordChange = (event) => {
    setAdminPassword(event.target.value);
  };

  const handleRecyclerEmailChange = (event) => {
    setRecyclerEmail(event.target.value);
  };

  const handleRecyclerPasswordChange = (event) => {
    setRecyclerPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Handle login submission logic here
    if (isAdminLogin) {
      console.log('Admin Login:', adminEmail, adminPassword);
      // Add logic to handle admin login
    } else {
      console.log('Recycler Login:', recyclerEmail, recyclerPassword);
      // Add logic to handle recycler login
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">
          <button className={`button ${isAdminLogin ? 'active' : ''}`} onClick={() => toggleLogin(true)}>
            Admin Login
          </button>
          <button className={`button ${!isAdminLogin ? 'active' : ''}`} onClick={() => toggleLogin(false)}>
            Recycler Login
          </button>
        </div>
       
      </div>

      <div className="inputs">
        {isAdminLogin ? (
          <>
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder="Admin Email" value={adminEmail} onChange={handleAdminEmailChange} />
            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Admin Password"
                value={adminPassword}
                onChange={handleAdminPasswordChange}
              />
              <img src={password_icon} alt="Toggle Password" className="small-icon" />
            </div>
          </>
        ) : (
          <>
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                type="email"
                placeholder="Email"
                value={recyclerEmail}
                onChange={handleRecyclerEmailChange}
              />
            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={recyclerPassword}
                onChange={handleRecyclerPasswordChange}
              />
              
            </div>
          </>
        )}
      </div>

      <div className="forgot-password">
        Forgot Password?<span>Click Here!</span>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={handleSubmit}>
          Login
        </div>
      </div>
    </div>
  );
};

export default RecyclerLogin;
