import React from "react";
import './Password.css';
import IconError from '/images/icon-error.svg';

const PasswordInput = ({ value, passwordChange, isValid }) => {
  const handleChange = (e) => {
    passwordChange(e.target.value);
  }


  return (
    <>
      <div id={isValid ? 'password-min' : 'password-max'}>
        <input
          id={isValid ? 'password-purple' : 'password-red'}
          name="password"
          type="password"
          placeholder='Password'
          value={value}
          onChange={handleChange}
        />
        <div id={isValid ? 'pw-img-p-hide': 'pw-img-p-show'}>
          <img
            id={isValid ? 'pw-exclamation-hide' : 'pw-exclamation-show'}
            src={isValid ? 'none' : IconError}
            alt="red exclamation mark" />
          <p id={isValid ? 'hide-pw-p' : 'show-pw-p'}><i>Be creative with your password!</i></p>
        </div>
      </div>
    </>
  )
}

export default PasswordInput;