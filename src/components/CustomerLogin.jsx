// CustomerLogin.js
import React,{useState} from 'react';
import './CustomerLogin.css';
import user_icon from '../components/Assets/person.png';
import email_icon from '../components/Assets/email.png';
import password_icon from '../components/Assets/password.png';


const CustomerLogin = () =>{

  const [action,setAction]=useState("Login");


  return(
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      
      <div className="inputs">
        {action==="Login"?<div></div>:<div className ="input">
          <img src={user_icon} alt=""/>
          <input type="text" placeholder=' Username'/>
        </div>}
        
        <div className ="input">
          <img src={email_icon} alt=""/>
          <input type="email" placeholder='Email Id' />
        </div>
        <div className ="input">
          <img src={password_icon} alt=""/>
          <input type="password" placeholder='Password' />
        </div>
        {action==="Login"?<div></div>:<div className ="input">
          <img src={password_icon} alt=""/>
          <input type="password" placeholder=' Confirm password'/>
        </div>}
        
      </div>
      {action==="Register"?<div></div>:<div className="forgot-password"> Forgot Password?<span>Click Here!</span></div> }
      

      <div className ="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Register")}}>Register</div>
        <div className={action==="Register"?"submit gray":"submit"} onClick={()=> {setAction("Login")}}>Login</div>
      </div>

    </div>
  )
}


export default CustomerLogin;
