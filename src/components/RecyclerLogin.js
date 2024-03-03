import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RecyclerLogin = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [accountTypeError, setAccountTypeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [selectedAccountType, setSelectedAccountType] = useState('doctor');

  const onSubmit = (data) => {
    console.log(data);
  };

  const validateForm = () => {
    let isValid = true;
    const formData = getValues();

    if (!formData.email || !/^\S+@\S+$/i.test(formData.email)) {
      setEmailError('Email is required and should be a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!formData.password || formData.password.length < 6) {
      setPasswordError('Password is required and should be at least 6 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (validateForm()) {
      handleSubmit(onSubmit)();
    }
  };

  const handleAccountTypeChange = (event) => {
    setAccountTypeError('');
    setSelectedAccountType(event.target.value);
  };

  return (
    <div className="login-page">
      <h1>Email</h1>
      <div className="form-group">
        <label htmlFor="accountType">Choose Account Type:</label>
        <select name="accountType" value={selectedAccountType} onChange={handleAccountTypeChange}>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
        {accountTypeError && (
          <p className="error">{accountTypeError}</p>
        )}
      </div>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
  type="email"
  name="email"
  ref={register('email', { required: true, pattern: /^\S+@\S+$/i })}
/>

          {emailError && (
            <p className="error">{emailError}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            ref={register('password',{ required: true, minLength: 6 })}
          />
          {passwordError && (
            <p className="error">{passwordError}</p>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default RecyclerLogin;
