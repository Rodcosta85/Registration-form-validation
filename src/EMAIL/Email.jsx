import React from "react";
import './Email.css';
import IconError from '/images/icon-error.svg';

const EmailInput = ({ value, emailChange, isValid }) => {
  const handleChange = (e) => {
    emailChange(e.target.value);
  }
  
  return (
    <>
      <div id={isValid ? 'email-min' : 'email-max'}>
        <input
          id={isValid ? 'email-purple' : 'email-red'}
          name="email"
          type="email"
          placeholder='Email'
          value={value}
          onChange={handleChange}
        />
        <div id={isValid ? 'e-img-p-hide' : 'e-img-p-show'}>
          <img
            id={isValid ? 'email-exclamation-hidden': 'email-exclamation-show'}
            src={isValid ? 'none' : IconError}
            alt="red exclamation mark" />
          <p id={isValid ? 'hide-email-p' : 'show-email-p'}><i>Looks like this is not an email</i></p>
        </div>
      </div>
    </>
  )
}

export default EmailInput;